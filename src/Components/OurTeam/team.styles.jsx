import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';


const SlideBox = styled(Box)(({ theme }) => ({
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
    top: 100,
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

export { SlideBox, SlideText, NameText, RoleText};