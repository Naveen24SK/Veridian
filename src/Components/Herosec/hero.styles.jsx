import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#006547',
    color: '#FFFFFF',
    padding: '10px 20px',
    marginTop: '16px',
    textTransform: 'none',
    borderRadius: '0px',
    fontSize: '18px',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: '#004d33',
    },
    '.arrow-icon':{
        left: '10%',
    },

}));

const StyledBox = styled(Box)(({ theme }) => ({
    height: '540px',
    width: '1308px',
    marginTop: '64px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '.rect-image': {
        position: 'relative',
        zIndex: 1,
    },
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

const CenteredContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    zIndex: 3,
    color: '#FFFFFF',
    textAlign: 'center',
    '.tagline': {
        backgroundColor: '#F9C300',
        borderRadius: '1px',
        fontSize: '12px',
        fontWeight: 800,
        display: 'inline-block',
        marginBottom: '14px',
        width: '218px',
    },
    '.main-text': {
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '1.5',
        marginBottom: '16px',
    },
    '.cta-button': {
        fontSize: '16px',
    },
}));

const HeadingCenter = styled(Typography)(({ theme }) => ({
    color: "#F5F7FA",
    fontSize: "48px",
    fontWeight: 700,
    ...theme.typography.h2
  }));

export { StyledBox, CenteredContent, StyledButton, HeadingCenter };
