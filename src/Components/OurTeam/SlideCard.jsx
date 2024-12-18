import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import Slide from "../../assets/slide.svg";
import Skew from "../../assets/skew.svg";
import Jarvis from "../../assets/jarvis.svg";
import Peter from "../../assets/Peter.svg";
import Jack from "../../assets/Jack.svg";
import { SlideBox, SlideText, NameText, RoleText } from "./team.styles";
import "./team.styles.css";

const profiles = [
  {
    id: 1,
    image: Jarvis,
    name: "Julian Jarvis",
    role: "Chairman, Founder and CEO",
    description:
      "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
  },
  {
    id: 2,
    image: Peter,
    name: "Peter Montegriffo KC",
    role: "Consultant",
    description:
      "Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices...",
  },
  {
    id: 3,
    image: Jack,
    name: "Grahame Jackson",
    role: "Head of Tax Advisory Team",
    description:
      "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee...",
  },
];

const Team = () => {
  return (
    <Box className="team-container">
      <h2 className="team-title">Our Team</h2>
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={0.75}
        loop
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id}>
            <SlideBox>
              <img src={Slide} alt="SlideBack" className="rect-image" />
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-pic prof"
              />
              <img src={Skew} alt="Skew" className="skew-box" />
              <SlideText>{profile.description}</SlideText>
              <NameText>{profile.name}</NameText>
              <RoleText>{profile.role}</RoleText>
            </SlideBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Team;
