import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import StatusChip from "../components/StatusChip";
import API from "../api/axios";

export default function ComplaintDetail() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    API.get(`/complaints/${id}/`)
      .then(res => setComplaint(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // ✅ Place it here, inside the component but above return
  const updateStatus = async (newStatus) => {
    try {
      const res = await API.patch(`/complaints/${id}/`, { status: newStatus });
      setComplaint(res.data); // update UI
      alert(`Status updated to ${newStatus}`);
    } catch (err) {
      console.error(err.response || err);
      alert("Error updating status. Check console.");
    }
  };

  if (!complaint) return null;

  return (
    <Box p={2}>
      <Typography variant="h5" fontWeight={600}>
        {complaint.category}
      </Typography>

      <Typography color="text.secondary" mt={1}>
        {complaint.description}
      </Typography>

      <Stack direction="row" spacing={1} mt={2}>
        <StatusChip label={complaint.priority} type="priority" />
        <StatusChip label={complaint.status} type="status" />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography><b>Location:</b> {complaint.location}</Typography>
      <Typography><b>Materials Required:</b> No</Typography>

      {/* ✅ Buttons to update status */}
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 2, mr: 1 }}
        onClick={() => updateStatus("DONE")}
      >
        Mark Done
      </Button>
      <Button
        variant="outlined"
        color="warning"
        sx={{ mt: 2 }}
        onClick={() => updateStatus("PENDING")}
      >
        Mark Pending
      </Button>
    </Box>
  );
}
