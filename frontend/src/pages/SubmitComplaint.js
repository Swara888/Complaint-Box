import { useState } from "react";
import { Box, Typography, TextField, Button, Card, CardContent } from "@mui/material";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function SubmitComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await API.post("/complaints/", {
        name: name,
        roomNo: roomNo,
        date: date,
        category: title,        // rename title to category
        description: description,
        priority: "MEDIUM",     // default priority
        location: "Unknown",    // default location if backend requires
    });

      alert("Complaint submitted successfully!");
      navigate("/complaints"); // redirect to list
    } catch (err) {
        console.error("Full error object:", err);
        if (err.response) {
            console.error("Status:", err.response.status);
            console.error("Data:", err.response.data);
        }
        alert("Error submitting complaint. Check console for details.");
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ width: 500, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" mb={2}>Submit Complaint</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />

            <TextField
            label="Room Number"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            />

            <TextField
            type="date"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            sx={{ mb: 2 }}
            />

            <TextField
              label="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
