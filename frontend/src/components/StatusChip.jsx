import { Chip } from "@mui/material";

export default function StatusChip({ label, type }) {
  const getColor = () => {
    if (type === "priority") {
      if (label === "CRITICAL") return "error";
      if (label === "MEDIUM") return "warning";
      return "default";
    }
    if (type === "status") {
      if (label === "DONE") return "success";
      if (label === "IN PROGRESS") return "info";
      return "default";
    }
  };

  return (
    <Chip
      label={label}
      color={getColor()}
      size="small"
      sx={{ fontWeight: 600 }}
    />
  );
}
