// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Grid, Stack, Container, Typography } from '@material-ui/core';
//
import { varFadeInRight, varFadeInLeft, varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#3f3f3f',
  padding: '50px 50px',
  marginTop: '50px'
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <MotionInView variants={varFadeInLeft}>
              <Stack spacing={1}>
                <Typography sx={{ fontSize: '28px', color: '#999' }}>
                  Need Help with your Cabinetry Project?
                </Typography>
                <Typography sx={{ fontSize: '24px', color: '#32b34a' }}>
                  In house cabinetry design services
                </Typography>
                <Typography sx={{
                  fontWeight: 300,
                  fontSize: '12pt',
                  lineHeight: 1.5,
                  color: '#999'
                }}>
                  Need a complete design service? Upload your sketches and specifications and our designers will give you a free quote and 3D drawings, or come in and see us to discuss your options. To use our online services, simply upload your cabinetry specifications via our spreadsheet and our team will get to work on your quote and drawings. Flat Packs WA can help you with your cabinetry needs whatever stage you are at with your project and whatever expertise level you are.
                </Typography>
              </Stack>
            </MotionInView>
          </Grid>

          <Grid item md={6} xs={12}>
            <MotionInView variants={varFadeInRight}>
              <Stack spacing={1}>
                <Typography sx={{ fontSize: '28px', color: '#999' }}>
                  Need Help with your Cabinetry Project?
                </Typography>
                <Typography sx={{ fontSize: '24px', color: '#32b34a' }}>
                  In house cabinetry design services
                </Typography>
                <Typography sx={{
                  fontWeight: 300,
                  fontSize: '12pt',
                  lineHeight: 1.5,
                  color: '#999'
                }}>
                  Need a complete design service? Upload your sketches and specifications and our designers will give you a free quote and 3D drawings, or come in and see us to discuss your options. To use our online services, simply upload your cabinetry specifications via our spreadsheet and our team will get to work on your quote and drawings. Flat Packs WA can help you with your cabinetry needs whatever stage you are at with your project and whatever expertise level you are.
                </Typography>
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
