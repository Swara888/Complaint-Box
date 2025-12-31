import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import ComplaintCard from "../components/ComplaintCard";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function ComplaintsList() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state
  const [updatingId, setUpdatingId] = useState(false); // for disabling button when updating

  const navigate = useNavigate();

  // Fetch complaints from backend
  const fetchComplaints = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await API.get("/complaints/");
      setComplaints(res.data);
    } catch (err) {
      console.error("Error fetching complaints:", err);
      setError("Failed to fetch complaints. Check console.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Toggle complaint status (done/pending)
  const toggleStatus = async (id) => {
    setUpdatingId(true);
    try {
      await API.put(`/complaints/done/${id}/`);
      fetchComplaints(); // refresh list
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Failed to update status. Check console.");
    } finally {
      setUpdatingId(false);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Complaints
      </Typography>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && complaints.length === 0 && (
        <Typography color="text.secondary">No complaints found</Typography>
      )}

      {complaints.map((c) => (
        <Box key={c.id} mb={2}>
          <ComplaintCard
            complaint={c}
            onClick={() => navigate(`/complaints/${c.id}`)}
          />
          
        </Box>
      ))}
    </Box>
  );
}
