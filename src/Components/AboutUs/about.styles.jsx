import { styled } from '@mui/material/styles';
import { Box,Card, Typography } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    height: 'auto',
    width: '1306px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#d9eee9',
    paddingBottom: '50px',
    paddingTop: '48px',
    '.grad': {
        position: 'absolute',
        maxWidth: '100%',
        zIndex: 1,
        top: 745
    },
}));

const Heading = styled(Typography)(({theme})=>({
    ...theme.typography.h4,
    color: "#091B29",
    marginBottom: '24px',
}))

const AboutBox = styled(Card)(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    height: '296px',
    textAlign: 'left',
    borderRadius: 0,
    color: '#51585E',
    ...theme.typography.body1,
}));

const FeatureCard = styled(Card)(({theme})=>({
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    maxWidth: "550px",
    height: "116px",
    padding: "20px",
    borderRadius: 0,
    justifyContent: "center",
    gap: '1px',
}));

const ContentBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '1000px',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: '#091B29',
    marginBottom: '8px',
    textAlign: 'left',
    ...theme.typography.subH3,
}));

const SectionText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#555',
    textAlign: 'justify',
    ...theme.typography.body1,
}));


export { StyledBox, Heading, AboutBox, ContentBox, IconWrapper, SectionTitle, SectionText, FeatureCard  };
