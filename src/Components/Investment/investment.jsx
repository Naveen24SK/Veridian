import React from "react";
import {CardMedia,Box} from "@mui/material";
import Focus from "../../assets/focus.svg";
import Portfolio from "../../assets/portfolio.svg";
import Social from "../../assets/social.svg";
import { MainBox, CardTitle, CardHeaders, CardBox, CardImage, CardRect, CardContents, CardWrapper, CardHeading } from "./investment.styles";


const cardData = [
  {
    id: 1,
    image: Focus,
    title: "Investment focus and strategy",
    content: `Veridian focuses on companies across a number of different sectors,
    predominantly internet-based companies with long-term growth potential,
    with the aim of releasing the potential of businesses, sustainably
    improving operations and generating significant growth and profitability.`,
    content2: `Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.`,
  },
  {
    id: 2,
    image: Portfolio,
    title: "Portfolio",
    content: `The central investment of Veridian is in the Pragmatic Play group of
    companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a
    world-leading game developer providing player-favourites to the most
    successful global brands in the iGaming industry.`,
    content2:`Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.`,
  },
  {
    id: 3,
    image: Social,
    title: "Corporate social responsibility",
    content: `Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.`,
    
  },
];

const Investment = () => {
  return (
    <Box>
    <MainBox>
      <CardHeading>Holistic Investment Approach</CardHeading>
      <CardWrapper>
        {cardData.map((card) => (
          <CardRect
            key={card.id}
          >
            <CardMedia
              component="img"
              height="180"
              image={card.image}
              alt={card.title}
            />
            <CardHeaders
              title={
                <CardTitle
                >
                  {card.title}
                </CardTitle>
              }
            />
            <CardContents >
                {card.content}
            </CardContents>
            <CardContents>
                {card.content2}
            </CardContents>
          </CardRect>
        ))}
      </CardWrapper>
    </MainBox>
    </Box>
  );
};

export default Investment;
