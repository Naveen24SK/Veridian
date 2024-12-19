import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton } from '@mui/material';

const MainBox = styled(Box)(({theme})=>({
    position: "relative",
    margin: '0 auto',
    maxwWidth: '1308px',
}));

const Heading = styled(Typography)(({theme})=>({
    ...theme.typography.h4,
    color: '#091B29',
    marginTop: '50px',
}));

const SlideBox = styled(Box)(({ theme }) => ({
    height: '540px',
    width: '1308px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '.rect-image': {
        position: 'relative',
        zIndex: 1,
    },
    '.profile-pic': {
        position: 'absolute',
        top: 140,
        height: '334px',
        width: '304px',
        zIndex: 2,
    },
    '.prof': {
        left: '150px',
        
    },
    '.skew-box': {
        position: 'absolute',
        left: 400,
        zIndex: 1,
        top: 390,
    },
}));

const SlideText = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: 90,
    color: '#717B85',
    fontSize: '16px',
    textAlign: 'left',
    zIndex: 2,
    paddingLeft:'460px',
    paddingRight:'370px',
    ...theme.typography.body1
}));

const NameText = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    top: 400,
    left: 450,
    color: 'white',
    textAlign: 'left',
    zIndex: 1,
    ...theme.typography.subH3
}));

const RoleText = styled(Typography)(({theme})=>({
    marginLeft: '10px',
    color: 'white',
    position: 'absolute',
    top: 430,
    left: 440,
    zIndex:1,
    textAlign: 'left',
    ...theme.typography.body1
}))

const NavBox = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '56%',
    width: '100%',
    transform: 'translateY(-50%)',
    zIndex: 10,
}));

const IconBox = styled(IconButton)(({ theme }) => ({
    backgroundColor:" #11423F",
    borderRadius: "50%",
    cursor: 'pointer',
    height: "50px",
    width: "50px",
    marginLeft: "30px",
    marginRight: "30px",
    color: "white",
    '&:hover': {
        backgroundColor: '#11423F',
    }
}));

export { MainBox, Heading, SlideBox, SlideText, NameText, RoleText,NavBox, IconBox};