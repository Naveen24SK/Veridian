import React from "react";
import { StyledBox, CenteredContent, StyledButton, HeadingCenter } from "./hero.styles";
import { Box, Typography } from "@mui/material";
import Rect from '../../assets/rect1.svg';
import grad2 from '../../assets/gradient1.svg';
import grad1 from '../../assets/gradient2.svg';
import arrow from '../../assets/arrow.svg';

const Hero = () => {
    return (
        <Box sx={rect}>
            <StyledBox>
                <img src={Rect} alt="rectangle1" className="rect-image" />
                <img src={grad1} alt="gradient1" className="grad-image grad1" />
                <img src={grad2} alt="gradient2" className="grad-image grad2" />

                <CenteredContent>
                    <Typography variant="subtitle2" className="tagline">
                        INVESTMENT MANAGEMENT
                    </Typography>
                    <HeadingCenter >
                        Empowering Investments with Expertise<br />
                        and Strategy
                    </HeadingCenter>
                    <StyledButton variant="contained" className="cta-button">
                        Know more
                        <img src={arrow} alt="arrow" className="arrow-icon" />
                    </StyledButton>
                </CenteredContent>
            </StyledBox>
        </Box>
    );
};

const rect = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    marginBottom: '50px',
};

export default Hero;
