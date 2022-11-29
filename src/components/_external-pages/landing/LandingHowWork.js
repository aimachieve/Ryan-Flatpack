// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Stack, Grid, Button, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, varFadeInRight, varFadeInLeft, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: '#F7F7F7',
  color: "#fff"
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

export default function LandingHowWork() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3, color: '#212B36' }}>
              100% Australian Designed & Constructed Custom <br /> Minesite Cabinets
            </Typography>
          </MotionInView>
        </ContentStyle>
      </Container>

      <Grid container>
        <Grid item md={6} sx={12}>
          <MotionInView variants={varFadeInLeft}>
            <img decoding="async" src="https://ba-web.s3-us-east-2.amazonaws.com/global/images/IN_HBL_X3_MerchantSt_2H.jpg" alt="" title="1280x720" />
          </MotionInView>
        </Grid>
        <Grid item md={6} sx={12} style={{ backgroundColor: "#242424" }}>
          <MotionInView variants={varFadeInRight}>
            <Stack spacing={2} sx={{ padding: '10% 7%' }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '40px',
              }}>
                A Family Business
              </Typography>
              <Typography>
                Flatpacks Mining is a family business here in Perth, Western Australia, supplying mine site flatpack cabinets since 2015 throughout Australia.
                <br />
                <br />
                On request, we will come and visit your minesite, measure and then provide you with a custom quote, alternatively send us room plans and photos of what you require.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sx={12} style={{ backgroundColor: "#242424" }}>
          <MotionInView variants={varFadeInLeft}>
            <Stack spacing={2} sx={{ padding: '10% 7%' }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '40px',
              }}>
                Quality and Performance
              </Typography>
              <Typography>
                The team guarantees transparency by working with other local australian  manufacturing companies, from the courier over to the screws you will get the best price guaranteed.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
        <Grid item md={6} sx={12}>
          <MotionInView variants={varFadeInRight}>
            <img decoding="async" src="https://ba-web.s3-us-east-2.amazonaws.com/global/images/CM_ES6_Wine%2BMarket_6H.jpg" alt="" title="1280x720" />
          </MotionInView>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sx={12}>
          <MotionInView variants={varFadeInLeft}>
            <img decoding="async" src="https://ba-web.s3-us-east-2.amazonaws.com/global/images/SWAT/SWAT-homepage-Image-desktop.jpg" alt="" title="1280x720" />
          </MotionInView>
        </Grid>
        <Grid item md={6} sx={12} style={{ backgroundColor: "#242424" }}>
          <MotionInView variants={varFadeInRight}>
            <Stack spacing={2} sx={{ padding: '10% 7%' }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '40px',
              }}>
                Home Security Away from Home
              </Typography>
              <Typography>
                Each cabinet can be fitted with its only locking system, allowing the staff to leave their personal items within their allocated environment.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sx={12} style={{ backgroundColor: "#242424" }}>
          <MotionInView variants={varFadeInLeft}>
            <Stack spacing={2} sx={{ padding: '10% 7%' }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '40px',
              }}>
                Flexibility & Customisation
              </Typography>
              <Typography>
                The items are not coming from China, everything is designed and made right here in our manufacturing facility in Perth. You get to choose the size, shape, and colour scheme, once done the cabinets can be flat-packed or assembled and sent to anywhere in Australia.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
        <Grid item md={6} sx={12}>
          <MotionInView variants={varFadeInRight}>
            <img decoding="async" src="https://ba-web.s3-us-east-2.amazonaws.com/global/AMPED/AMPED_BAF_Page_Mockup_Scene_1.jpg" alt="" title="1280x720" />
          </MotionInView>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sx={12}>
          <MotionInView variants={varFadeInLeft}>
            <img decoding="async" src="https://ba-web.s3-us-east-2.amazonaws.com/global/images/IN_HBL_X3_MerchantSt_2H.jpg" alt="" title="1280x720" />
          </MotionInView>
        </Grid>
        <Grid item md={6} sx={12} style={{ backgroundColor: "#242424" }}>
          <MotionInView variants={varFadeInRight}>
            <Stack spacing={2} sx={{ padding: '10% 7%' }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '40px',
              }}>
                Nothing but Quality
              </Typography>
              <Typography>
                Flatpacks Mining is produced using premium industry brands such as Blum, and Lamanex. The team uses the latest technology to create an Industry appropriate cabinets that utilise the space.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sx={12} style={{ backgroundColor: "#242424" }}>
          <MotionInView variants={varFadeInLeft}>
            <Stack spacing={2} sx={{ padding: '10% 7%' }}>
              <Typography sx={{
                fontWeight: 600,
                fontSize: '40px',
              }}>
                No two orders are ever alike.
              </Typography>
              <Typography>
                Speed and delivery time are important to Flatpacks Mining, once you're filled out this form, our staff will get in touch with you, to either arrange a mine site visit or an quote.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
        <Grid item md={6} sx={12}>
          <MotionInView variants={varFadeInRight}>
            <img decoding="async" src="https://ba-web.s3-us-east-2.amazonaws.com/global/images/CM_ES6_Wine%2BMarket_6H.jpg" alt="" title="1280x720" />
          </MotionInView>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
