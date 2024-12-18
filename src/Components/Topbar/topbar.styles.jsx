import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Container } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
  boxShadow: 'none',
  borderBottom: '1px solid #CACFDB',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontWeight:500,
  margin: '0 8px',
  color:'#51585E',
  textTransform: 'none',

  // '&:hover': {
  //   borderBottom:'2px solid #009065',
  // },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
//   maxWidth: 'lg',
}));