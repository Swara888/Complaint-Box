import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ComplaintCard from "../components/ComplaintCard";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function ComplaintsList() {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/complaints/")
      .then((res) => {
        setComplaints(res.data);
      })
      .catch((err) => {
        console.error("Error fetching complaints:", err);
      });
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Complaints
      </Typography>

      {complaints.length === 0 && (
        <Typography color="text.secondary">
          No complaints found
        </Typography>
      )}

      {complaints.map((c) => (
        <ComplaintCard
          key={c.id}
          complaint={c}
          onClick={() => navigate(`/complaints/${c.id}`)}
        />
      ))}
    </Box>
  );
}
