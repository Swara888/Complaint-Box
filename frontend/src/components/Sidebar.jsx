import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", borderRight: "1px solid #ddd", height: "100vh", padding: "10px" }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/complaints">
          <ListItemText primary="Complaints" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/submit">
          <ListItemText primary="Submit Complaint" />
        </ListItem>
      </List>
    </div>
  );
}
