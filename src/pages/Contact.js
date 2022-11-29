// material
import { Typography, Stack, Grid, Container, Divider } from '@material-ui/core';
//
import { varFadeInRight, varFadeInLeft, varFadeInUp, MotionInView } from 'components/animate';

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Container title="Flat Packs | MineSites | Contact" id="move_top" sx={{ marginTop: '250px' }}>
      <Grid container spacing={3} mb={5}>
        <Grid item md={6} sm={12}>
          <MotionInView variants={varFadeInLeft}>
            <Stack spacing={2}>
              <Typography sx={{
                fontSize: '21pt',
                fontWeight: 400,
                color: '#01d32b',
              }}>
                Contact Flat Packs WA
              </Typography>
              <Typography sx={{
                fontSize: '15pt',
                color: '#111',
                fontWeight: 500,
              }}>
                Flat Packs WA is a family-owned custom cabinetry supplier located south of Perth.
              </Typography>
              <Stack spacing={1} direction="row">
                <Typography sx={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 500,
                }}>
                  Phone:
                </Typography>
                <a href="tel:+61894182833" style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 500,
                }}>
                  (08) 9418 2833
                </a>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography sx={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 500,
                }}>
                  Email:
                </Typography>
                <a href="mailto:sales@flatpackswa.com.au" style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 500,
                }}>
                  sales@flatpackswa.com.au
                </a>
              </Stack>
            </Stack>

            <Divider sx={{ borderColor: "#01d32b", marginTop: 3, marginBottom: 3 }} />

            <Stack spacing={2}>
              <Typography sx={{
                fontSize: '15pt',
                color: '#111',
                fontWeight: 500,
              }}>
                Perth Factory Hours (Trade Only):
                <br />
                <span style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 400,
                }}>
                  8 Geelong Court
                </span>
                <br />
                <span style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 400,
                }}>
                  Bibra Lake WA
                </span>
              </Typography>

              <Typography sx={{
                fontSize: '15pt',
                color: '#111',
                fontWeight: 500,
              }}>
                Opening Hours
                <br />

                <span style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 400,
                }}>
                  Monday - Thursday 8:00 am to 4:00 pm
                </span>
                <br />
                <span style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 400,
                }}>
                  Friday - 8:00 am to 3:00 pm
                </span>
                <br />
                <span style={{
                  fontSize: '15pt',
                  color: '#111',
                  fontWeight: 400,
                }}>
                  Saturday: By Appointment
                </span>
              </Typography>
            </Stack>

          </MotionInView>
        </Grid>
        <Grid item md={6} sm={12}>
          <MotionInView variants={varFadeInRight}>
            <iframe style={{
              position: "relative",
              border: 'none',
            }}
              src="https://www.google.com/maps/d/u/0/embed?mid=1OXT0FOcfz72ZoZs_vux0-tB7OnM"
              width="100%"
              height="500" />
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  )
}