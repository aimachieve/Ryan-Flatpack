import { Icon } from '@iconify/react';
import phone from '@iconify/icons-eva/phone-call-fill';
import email from '@iconify/icons-eva/email-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, Button, Stack } from '@material-ui/core';
import { varFadeInUp, MotionInView, varFadeInLeft, varFadeInRight } from 'components/animate';

//
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: '#333',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid
          container
          spacing={6}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item md={4} sm={12}>
            <MotionInView variants={varFadeInLeft}>
              <Stack spacing={2}>
                <img src="/images/footer-logo.png" alt="footer-log0" style={{ width: '100%' }} />
                <Typography sx={{
                  color: '#93c83d',
                  fontSize: '16px',
                  lineHeight: 1.15,
                  letterSpacing: 0,
                }}>
                  About Flat Packs Mining:
                </Typography>
                <Typography sx={{
                  color: '#eeeeee',
                  fontSize: '16px',
                }}>
                  We supply custom made cabinetry for WA's Cabinet Makers and Builders.
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon icon={phone} style={{ color: '#eeeeee', width: '30px', height: '30px' }} />
                  <a href="tel:+61894182833" style={{ color: '#eee' }}>Phone: (08) 9418 2833</a>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon icon={email} style={{ color: '#eeeeee', width: '30px', height: '30px' }} />
                  <a href="mailto:info@flatpackswa.com.au" style={{ color: '#eee' }}>Email: info@flatpacksmining.com.au</a>
                </Stack>
              </Stack>
            </MotionInView>
          </Grid>
          <Grid item md={4} sm={12}>
            <MotionInView variants={varFadeInUp}>
              <Stack spacing={3}>
                <Typography sx={{
                  color: '#93c83d',
                  fontSize: '16px',
                  lineHeight: 1.15,
                  letterSpacing: 0,
                }}>
                  Office Hours:
                </Typography>
                <Typography sx={{
                  color: '#eeeeee',
                  fontSize: '16px',
                  fontWeight: 700
                }}>
                  Monday - Thursday: 8:00 am - 4:00 pm
                  <br />
                  Friday: 8:00 am to 3:00 pm
                  <br />
                  Saturday: By Appointment
                </Typography>
                <Typography sx={{
                  color: '#eeeeee',
                  fontSize: '16px',
                  fontStyle: 'italic'
                }}>
                  Showroom by appointment or booking.
                </Typography>
                <Typography sx={{
                  color: '#eeeeee',
                  fontSize: '16px',
                  fontWeight: 700
                }}>
                  Our Factory / Showroom Address:
                  <br />
                  8 Geelong Court
                  <br />
                  BIBRA LAKE WA
                </Typography>
              </Stack>
            </MotionInView>
          </Grid>
          <Grid item md={4} sm={12}>
            <MotionInView variants={varFadeInRight}>
              <img src="/images/cabinet-footer.png" alt="cabinet footer" style={{ marginBottom: '30px' }} />
              <a
                href='https://www.facebook.com/flatpackswa/'
                style={{
                  padding: '10px 20px',
                  fontSize: '17.5px',
                  borderLeft: '5px solid #eee',
                  color: '#eee',
                }}>
                Flat Packs Mining
              </a>
            </MotionInView>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#666', margin: '30px 0 30px 0' }} />

        <Typography
          color="white"
          sx={{
            fontSize: 14,
            textAlign: { md: 'right', xs: 'center'},
            fontFamily: 'Poppins'
          }}
        >
          COPYRIGHT © 2022 FLAT PACKS WA | TERMS & CONDITIONS
        </Typography>
      </Container>
    </RootStyle >
  );
}
