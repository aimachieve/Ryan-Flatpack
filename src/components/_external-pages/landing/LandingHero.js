import { useState } from 'react';
import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Select, MenuItem, TextField } from '@material-ui/core';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <div className='myvideo'>
        <video src="/images/top-video.mp4" autoPlay loop muted />
        <div className="content">
          <motion.div variants={varFadeInUp}>
            <Typography sx={{ color: 'common.white', fontSize: '70px', padding: 'auto' }}>
              Custom Made Cabinetry for 
              <br />
              <span style={{ color: "#32b34a" }}>Australian MineSites!</span>
            </Typography>
          </motion.div>
        </div>
      </div>
    </>
  );
}
