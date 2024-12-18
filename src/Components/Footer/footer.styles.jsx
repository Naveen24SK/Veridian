import { styled } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";

// Footer Container
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#F5F7FA", 
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "12px",
  color: "#717B85",
//   position: "relative",
  height: "66px",
  width: "1308px",
}));

// Footer Text
const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: "#717B85",
  weight: 400,
  margin: 0,
}));

// Footer Link
const FooterLink = styled(Link)(({ theme }) => ({
  fontSize: "12px",
  color: "#717B85",
  weight: 400,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export { FooterContainer, FooterText, FooterLink };
