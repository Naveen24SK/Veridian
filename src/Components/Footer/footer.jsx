import React from "react";
import { FooterContainer, FooterText, FooterLink } from "./footer.styles";
import {Box} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={rect}>
    <FooterContainer>
      {/* Left Side Text */}
      <FooterText>
        COPYRIGHT © Veridian 2024. All rights reserved. Any and all content included
        on this website or incorporated by reference is protected by international
        copyright laws.
      </FooterText>

      {/* Right Side Link */}
      <FooterLink href="#">Term of use</FooterLink>
    </FooterContainer>
    </Box>
  );
};

const rect = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA", 
    borderTop: "2px solid #CACFDB",
};

export default Footer;
