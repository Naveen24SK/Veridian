import React from "react";
import {ContactContainer,TitleText,SubtitleText,EmailBox,MailLabel,EmailText,ArrowIcon,HelpText,} from "./contact.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from '@mui/material';
import grad1 from '../../assets/Group44.svg';
import grad2 from '../../assets/Group45.svg';

const Contact = () => {
  return (
    <Box sx={rect}>
    <ContactContainer>
      <img src={grad1} alt="gradient1" className="grad-image grad1" />
      <img src={grad2} alt="gradient2" className="grad-image grad2" />

      <TitleText>Contact Us</TitleText>

      <SubtitleText>
        Have questions or need more information? Reach out to us at.
      </SubtitleText>

      <EmailBox>
        <MailLabel>Mail To</MailLabel>
        <EmailText>info@veridian.com</EmailText>
        <ArrowIcon>
          <ArrowForwardIcon />
        </ArrowIcon>
      </EmailBox>

      <HelpText>'We're help to help!'</HelpText>
    </ContactContainer>
    </Box>
  );
};

const rect = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '50px',
};

export default Contact;
