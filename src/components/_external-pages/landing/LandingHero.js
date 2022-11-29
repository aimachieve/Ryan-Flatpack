import { useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField } from '@material-ui/core';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  paddingTop: "182px",
}));

const ContentStyle = styled(motion.div)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
            <video src="/images/top-video.mp4" autoPlay loop style={{
              width: '100%',
              height: 'calc(100%-182px)',
              position: 'relative',
            }}/>
          {/* <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white', fontSize: '28px' }}>
                We will Screw Down Our Suppliers, and Pass on the Savings to You!
                <br />
                <span style={{ color:"#32b34a" }}>We Even Supply you the Screws!</span>
              </Typography>
            </motion.div>
          </ContentStyle> */}
      </RootStyle>
    </>
  );
}
