import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import API from "../api/axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [categoryData, setCategoryData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    API.get("/analytics/category/").then(res => setCategoryData(res.data));
    API.get("/analytics/status/").then(res => setStatusData(res.data));
  }, []);

  const categoryChart = {
    labels: categoryData.map(item => item.category),
    datasets: [{ label: "Complaints", data: categoryData.map(item => item.count), backgroundColor: "#1976d2" }],
  };

  const statusChart = {
    labels: statusData.map(item => item.status),
    datasets: [{ data: statusData.map(item => item.count), backgroundColor: ["#388e3c", "#1976d2"] }],
  };

  const totalComplaints = statusData.reduce((sum, item) => sum + item.count, 0);
  const doneComplaints = statusData.find(item => item.status === "DONE")?.count || 0;
  const inProgress = statusData.find(item => item.status === "IN PROGRESS")?.count || 0;

  return (
    <Box>
      <Typography variant="h4" mb={3}>Analytics Dashboard</Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, borderRadius: 2 }}>
            <Typography>Total Complaints</Typography>
            <Typography variant="h5">{totalComplaints}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, borderRadius: 2 }}>
            <Typography>Done</Typography>
            <Typography variant="h5">{doneComplaints}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, borderRadius: 2 }}>
            <Typography>In Progress</Typography>
            <Typography variant="h5">{inProgress}</Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <Typography mb={1}>Complaints by Category</Typography>
            <Bar data={categoryChart} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <Typography mb={1}>Complaints by Status</Typography>
            <Pie data={statusChart} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
