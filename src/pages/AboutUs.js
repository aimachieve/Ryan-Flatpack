import { motion } from 'framer-motion';
// material
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack, Grid, Container } from '@material-ui/core';
//
import { varFadeInRight, varFadeInLeft, varFadeInUp, MotionInView } from 'components/animate';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <Container sx={{ marginTop: '250px' }}>
      <Grid container spacing={3} mb={5}>
        <Grid item md={6} sm={12}>
          <MotionInView variants={varFadeInLeft}>
            <Stack spacing={2}>
              <Typography sx={{
                fontSize: '21pt',
                fontWeight: 400,
                color: '#01d32b',
              }}>
                About Flat Packs WA
              </Typography>
              <Typography sx={{
                fontSize: '15pt',
                fontWeight: 300,
                color: '#808080',
              }}>
                Flat Packs WA, owned by Brendan Menner, is a manufacturer of custom order flat pack cabinetry suitable for all domestic and commercial applications. Based in Bibra Lake, WA, we’re committed to crafting the highest quality custom cabinetry.
                <br />
                <br />
                Everything that we do is designed to fit our customers’ space and requirements and we use the latest technology to design and craft cabinets. No two orders are ever alike and we pride ourselves on our customer focus. We look forward to working with you to create your ideal cabinet solution.
              </Typography>
            </Stack>
          </MotionInView>
        </Grid>
        <Grid item md={6} sm={12}>
          <MotionInView variants={varFadeInRight}>
            <iframe src="//videos.sproutvideo.com/embed/a09adcb3111deac728/e7971a613352d0fb" width="100%" height="354" frameborder="0" allowfullscreen="" />
          </MotionInView>
        </Grid>
      </Grid>

      {/* FAQ */}
      <Grid container spacing={3} mb={5}>
        <Grid item md={8} sm={12}>
          <MotionInView variants={varFadeInUp}>
            <Typography sx={{
              color: '#111',
              fontWeight: 500,
              marginBottom: '30px',
              fontSize: '15pt'
            }}>
              FREQUENTLY ASKED QUESTIONS
            </Typography>
          </MotionInView>

          <Stack spacing={1}>
            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>How long will my quote take?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>How big will my Flat Packs WA pallet be?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>How much will each pallet weight?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>Can Flat Packs WA assemble my Flat Packs cabinets, or other companies’ flat packs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>Will Flat Packs WA deliver my cabinets?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>Can Flat Packs WA install my cabinets?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>How do we have 16mm voids being base ...?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>Where do I start when putting together my Flat Pack WA cabinets?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>What if I or my client damages part of the Flat Pack?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>Can you give me a price per metre for a kitchen?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>What do you need from the installers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

            <MotionInView variants={varFadeInLeft}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>What if I cannot take a pallet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    fontWeight: 300,
                    color: 'green',
                    fontSize: '15pt',
                    lineHeight: 1.5,
                  }}>
                    Your quote will be ready in 2-4 days of requesting it depending on the size and complexity of the job.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionInView>

          </Stack>
        </Grid>
        <Grid item md={4} sx={12}>
          <Stack spacing={3}>
            <MotionInView variants={varFadeInRight}>
              <img src="https://www.flatpackswa.com.au/wp-content/uploads/2017/05/about-us1-300x200.jpg" alt="" width="300" height="150" />
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <img src="https://www.flatpackswa.com.au/wp-content/uploads/2017/05/about-us2-300x200.jpg" alt="" width="300" height="150" />
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <img src="https://www.flatpackswa.com.au/wp-content/uploads/2017/05/about-us3-300x200.jpg" alt="" width="300" height="150" />
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <img src="https://www.flatpackswa.com.au/wp-content/uploads/2017/05/about-us1-300x200.jpg" alt="" width="300" height="150" />
            </MotionInView>
            <MotionInView variants={varFadeInRight}>
              <img src="https://www.flatpackswa.com.au/wp-content/uploads/2017/05/about-us2-300x200.jpg" alt="" width="300" height="150" />
            </MotionInView>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
