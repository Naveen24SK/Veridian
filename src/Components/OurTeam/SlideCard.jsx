import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import Slide from "../../assets/slide.svg";
import Skew from "../../assets/skew.svg";
import Jarvis from "../../assets/jarvis.svg";
import Peter from "../../assets/Peter.svg";
import Jack from "../../assets/Jack.svg";
import { SlideBox, Heading, SlideText, NameText, RoleText,NavBox, IconBox } from "./team.styles";
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
    role: "",
    description:
      "Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.",
    description2:" Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.",
  },
  {
    id: 3,
    image: Jack,
    name: "Grahame Jackson",
    role: "",
    description:
      "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation.  He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
  },
];

const Team = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box className="team-container">
      <Heading >Our Team</Heading>
      <NavBox >
        <IconBox ref={prevRef} className="prev">
          <ArrowBackRoundedIcon  />
        </IconBox>

        <IconBox ref={nextRef} className="next" >
          <ArrowForwardRoundedIcon  />
        </IconBox>
      </NavBox>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1.25}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id}>
            <SlideBox>
              <img src={Slide} alt="SlideBack" className="rect-image" />
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-pic prof"  />
              <img src={Skew} alt="Skew" className="skew-box" />
              <SlideText>{profile.description}</SlideText>
              {/* <SlideText>{profile.description2}</SlideText> */}
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
