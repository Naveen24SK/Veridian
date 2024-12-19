import React from 'react';
import { StyledAppBar, StyledBox, StyledButton, StyledContainer } from './topbar.styles';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/logo.svg';

const pages = ['Home', 'About Us', 'Our Team', 'Investment Approach', 'Contact Us'];

function Topbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledContainer>
        <Toolbar disableGutters>
          <img src={Logo} alt="Logo" style={{ marginLeft: '-80px' }} />
          <StyledBox>
            {pages.map((page) => {
              const id = page.toLowerCase().replace(/\s+/g, '');
              return (
                <StyledButton
                  key={page}
                  onClick={() => handleScroll(id)}
                >
                  {page}
                </StyledButton>
              );
            })}
          </StyledBox>
        </Toolbar>
      </StyledContainer>
    </StyledAppBar>
  );
}

export default Topbar;
