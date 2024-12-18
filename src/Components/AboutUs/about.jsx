import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { StyledBox, AboutBox, FeatureCard, ContentBox, IconWrapper, SectionTitle, SectionText  } from "./about.styles";
import logo from "../../assets/aboutlogo.svg";
import excel from "../../assets/exce.svg";
import sustain from "../../assets/sust.svg";
import init from "../../assets/init.svg";
import integ from "../../assets/integ.svg";
import Investment from "../Investment/investment";
// import OurTeam from "../OurTeam/Team";
import Slide from "../../Components/OurTeam/SlideCard";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  // width: "549px",
  // height: "162px",
}));

const About = () => {
  const icons = {
    logo,
    excel,
    sustain,
    init,
    integ,
  };

  const gridItems = [
    {
      id: 1,
      title: "",
      description: `Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise. 

We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this is mind.

Veridian's expertise is delivered with a responsible approach to our business, our team, our local community, and the environment`,
      icon: "logo",
    },
    {
      id: 2,
      title: "Excellence",
      description:
        "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
      icon: "excel",
    },
    {
      id: 3,
      title: "Initiative",
      description:
        "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
      icon: "init",
    },
    {
      id: 4,
      title: "Sustainability",
      description:
        "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
      icon: "sustain",
    },
    {
      id: 5,
      title: "Integrity",
      description:
        "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
      icon: "integ",
    },
  ];

  return (
    <Box sx={rect}>
    <StyledBox>

      <Typography
        gutterBottom
        sx={{ textAlign: "center", color: "#091B29", fontWeight: 700, fontSize: "42px" }}
      >
        About Us
      </Typography>
    
    <Box  >
      <Grid container padding={" 0px 94px"} spacing={2} >
        <Grid item xs={12} md={12} width={100} display={"flex"} justifyContent={"center"}>
          <AboutBox>
            <img src={icons.logo} alt="Logo" width={350} height={200} style={{marginLeft:'48px', marginRight:'31px', }} />
            <Typography variant="body1" marginRight={'48px'} >
              {gridItems[0].description}
            </Typography>
          </AboutBox>
        </Grid>

        {gridItems.slice(1).map((item) => (
          <Grid item xs={12} md={6} key={item.id} display={"flex"} justifyContent={"center"}>
              <FeatureCard display="flex" flexDirection="row" alignItems="center">
                <Box>
                <SectionTitle
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: 1 }}
                >
                  {item.title}
                </SectionTitle>
                <SectionText
                  variant="body2"
                  sx={{ marginTop: 1 }}
                >
                  {item.description}
                </SectionText>
                </Box>
                <img src={icons[item.icon]} alt={item.title} height={104} style={{marginLeft:'18px', marginRight:'18px', }} />
              </FeatureCard>
          </Grid>
        ))}
      </Grid>
      </Box>
      <Slide />
      {/* <OurTeam /> */}
      <Investment />
      </StyledBox>
    </Box>
  );
};

const rect = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
};

export default About;
