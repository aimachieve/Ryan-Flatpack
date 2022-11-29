// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import { CarouselAnimation, CarouselBasic1, CarouselBasic2, CarouselBasic3, CarouselBasic4, CarouselThumbnail, CategoryCarousel } from '../../carousel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#F7F7F7'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              What Clients Say About Us
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <CategoryCarousel />
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
