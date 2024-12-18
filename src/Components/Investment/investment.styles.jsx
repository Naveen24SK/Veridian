import { styled } from "@mui/material/styles";
import { Box, Typography, Card,CardMedia,CardHeader,CardContent } from "@mui/material";
import theme from "../../Theme/theme";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  marginTop: "10px",
}));

const CardHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "32px",
  color: "#091B29",
  marginBottom: "32px",
  textAlign: "center",
}));

const CardHeaders = styled(CardHeader)(({ theme }) => ({
  padding: 0,
}));

const CardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "28px",
  flexWrap: "wrap",
}));

const CardRect = styled(Card)(({ theme }) => ({
    minHeight: "505px",
    maxWidth: "319px",
    backgroundColor: "#FFFFFF",
    padding: "28px",
}));

const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  width: "382px",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const CardImage = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "16px",
  borderRadius: "8px",
});

const CardTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subH3,
  color: "#000000",
  marginBottom: "16px",
  textAlign: "left",
  width: "100%",
  paddingTop: "16px",
}));

const CardContents = styled(CardContent)(({ theme }) => ({
  ...theme.typography.body1,
  color: "#717B85",
  textAlign: "left",
  lineHeight: "20px",
  padding: 0,
  marginBottom: "20px",
  "&:last-child": {    
    paddingBottom: "0px",
  },
}));

export { CardContents, CardTitle, CardBox, MainBox, CardHeaders, CardHeading, CardWrapper, CardImage, CardRect };
