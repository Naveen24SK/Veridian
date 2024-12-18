import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#008A5D", 
  position: "relative",
  textAlign: "center",
  height: "285px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "1306px",
'.grad-image': {
    position: 'absolute',
    top: 0,
    height: '100%',
    zIndex: 2,
},
'.grad1': {
    left: '0%',
},
'.grad2': {
    right: '0%',
},
}));

const TitleText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "12px",
}));

const SubtitleText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 400,
  marginBottom: "24px",
}));

const EmailBox = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#006547", 
  padding: "0px 0px 0px 15px",
}));

const MailLabel = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFC107", 
  color: "#091B29",
  padding: "2px 2px",
  fontSize: "12px",
  fontWeight: 700,
  marginRight: "12px",
  borderRadius: "0px",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#E6A900",
  },
}));

const EmailText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "18px",
  fontWeight: 600,
}));

const ArrowIcon = styled(Box)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "20px",
  marginLeft: "12px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#005139",
  height: "52px",
  width: "52px",
}));

const HelpText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: 400,
  marginTop: "16px",
}));

export {
  ContactContainer,
  TitleText,
  SubtitleText,
  EmailBox,
  MailLabel,
  EmailText,
  ArrowIcon,
  HelpText,
};
