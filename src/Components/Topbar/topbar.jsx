import React from 'react';
import { StyledAppBar, StyledBox, StyledButton, StyledContainer } from './topbar.styles';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/logo.svg';

const pages = ['Home', 'About Us', 'Our Team', 'Investment Approach', 'Contact us'];

function Topbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <StyledContainer>
        <Toolbar disableGutters>
          <img src={Logo} alt="Logo" style={{ marginRight: '20px' }} />
          <StyledBox>
            {pages.map((page) => (
              <StyledButton key={page} onClick={handleCloseNavMenu}>
                {page}
              </StyledButton>
            ))}
          </StyledBox>
        </Toolbar>
      </StyledContainer>
    </StyledAppBar>
  );
}

export default Topbar;
