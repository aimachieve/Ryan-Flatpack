// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInRight, varFadeInLeft } from '../../animate';
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

export default function LandingQuote() {
  return (
    <RootStyle>
      <Container maxWidth="lg" alignItems="center">
        <ContentStyle>
          <Grid container>
            <Grid md={9} sm={12} item>
              <MotionInView variants={varFadeInLeft}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  WHETHER YOU HAVE A SMALL MINESITE OR A GIANT PLANT, OUR CABINET EXPERTS ARE HERE TO MAKE YOUR LIFE EASIER, MORE COMFORTABLE, AND LESS EXPENSIVE.
                </Typography>

                <Typography sx={{ mb: 3 }}>
                  Give us a call at 
                  <span>
                    <a
                      href="tel:0894182833"
                      style={{
                        textAlign: 'center',
                        position: 'relative',
                        color: '#31b34a',
                        transition: 'transform 0.3s',
                        textDecoration: 'none',
                      }}>
                       Phone (08) 9418 2833
                    </a>
                  </span>
                  , or request a quote to learn more about the most efficient comfort solution for you. Or shop our online store today!
                </Typography>
              </MotionInView>
            </Grid>
            <Grid md={3} sm={12} item sx={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
              <MotionInView variants={varFadeInRight} style={{
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Button variants="contained" sx={{
                  backgroundColor: "#31b34a",
                  color: 'white',
                  borderRadius: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  padding: '15px 20px',
                  '&:hover': {
                    textDecoration: 'none',
                    color: 'white',
                    backgroundColor: '#333333'
                  }
                }}>
                  GET A QUOTE
                </Button>
              </MotionInView>
            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
