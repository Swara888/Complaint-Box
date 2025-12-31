import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StatusChip from "./StatusChip";


export default function ComplaintCard({ complaint, onClick }) {
  return (
    <Card
      sx={{
        mb: 1.5,
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        "&:hover": { boxShadow: "0 6px 15px rgba(0,0,0,0.1)", cursor: "pointer" },
      }}
      onClick={onClick}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <StatusChip label={complaint.priority} type="priority" />
          <StatusChip label={complaint.status} type="status" />
        </Box>

        <Typography variant="subtitle2" color="text.secondary">
          Name: {complaint.name} | Room: {complaint.roomNo} | Date: {complaint.date}
        </Typography>

        <Typography variant="h6" mt={1}>
          {complaint.category}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {complaint.description}
        </Typography>

        <Box
          mt={1.5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption">
            📍 {complaint.location}
          </Typography>
          <IconButton size="small">
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
