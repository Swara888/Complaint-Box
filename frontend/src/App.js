import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ComplaintsList from "./pages/ComplaintsList";
import ComplaintDetail from "./pages/ComplaintDetail";
import SubmitComplaint from "./pages/SubmitComplaint";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";

function NavTabs() {
  const location = useLocation();
  const tabValue = location.pathname === "/" ? 0 :
                   location.pathname.startsWith("/complaints") ? 1 : 2;

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Complaint Box</Typography>
        <Tabs value={tabValue} textColor="inherit" indicatorColor="secondary">
          <Tab label="Dashboard" component={Link} to="/" />
          <Tab label="Complaints" component={Link} to="/complaints" />
          <Tab label="Submit Complaint" component={Link} to="/submit" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavTabs />
      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/complaints" element={<ComplaintsList />} />
          <Route path="/complaints/:id" element={<ComplaintDetail />} />
          <Route path="/submit" element={<SubmitComplaint />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
