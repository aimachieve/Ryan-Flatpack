import { useRef } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
import { Box, Paper, Link, Typography, CardContent, Stack, Rating, Avatar } from '@material-ui/core';
// utils
import { CarouselControlsArrowsBasic2 } from './controls';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'Hello, my name is JuMAN Andrada Maraviles. I am interested to apply in your prestigeous company as kitchen Modeler that suit in my interest. currently, i am working with SCHULLER kitchen made in Germany and BATISTELLA Company designer located in OMAN. if you have a vacancy please contact me at:+968 94497155 thank you..',
    name: "JUMAN MARAVILES",
    date: "APRIL 19, 2022"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'I designed my own cabinet and Flat Packs WA built it for me - Jeff Riddle was very helpful in finding a solution required for a raised lid I wanted, and sourced the hardware for the job. Very happy with the final result and the great workmanship.',
    name: "JO L GONZALES",
    date: "SEPTEMBER 19, 2021"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'Great prompt service, friendly staff and a knowledgeable team. Thanks very much guys,we look forward to the kitchen being installed.',
    name: "MATT STOKES",
    date: "JANUARY 14, 2021"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'We regularly purchase cabinets and panels from Brendan and the team at Flat Packs, great team and very professional.',
    name: "NICK BARR",
    date: "SEPTEMBER 19, 2020"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'Thanks to Mark and Laurie who helped me out with a project at home. Yes I gave them vague measurements, dodgy drawing to work with and they were very patient and helpful. Great service, thanks again.',
    name: "PATRICK RYAN",
    date: "MAY 16, 2020"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'Planning, researching with our budget in mind for a kitchen and laundry renovation took time and some concerns over the "what if". Mark and his team took all this out of the equation. The show room was what sold us as all our questions over details were answered by showing us what , where and how it would fit in. The work was done within the said time frame and the tradesmen were friendly and professional with minimal fuss. All done and looking well above our expectations and within our budget. We have no hesitation to recommend Flat Packs WA and suggest to go and visit the showroom as the first step toward a successful and happy outcome.',
    name: "NICKY MCNERNEY",
    date: "MAY 5, 2020"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'We are very excited to be using our fabulous new kitchen and laundry designed by Flat Packs WA. It was a seamless, professional process from start to finish. It was consultative in the planning, timing was exact, a clean demolition , installation was smooth and an exceptional finished job.',
    name: "LESLEY BARTON",
    date: "MAY 1, 2020"
  },
  {
    rate: 5,
    avatar: 'https://lh3.googleusercontent.com/a-/AFdZucpMPFT5QLuODUTFVtwNq1KtW2PxTMYCTeGGlGT9yw=s40-c-c0x00000000-cc-rp-mo-br100',
    description: 'We have used other modular and DIY kitchens in the past and Flat Packs WA beats them all hands down. From start to finish the experience was professional, friendly and accommodating, with excellent turn around times for drawings and manufacture. After delivery Brad and Mark were happy to help with questions and pro tips. Fit was perfect and came together really well. We used their recommended stone mason too, We were a little nervous having only seen their work in the showroom and paying up front...there was no need to worry these guys were outstanding and the tops are almost seamless. I have never written a google review before, this is another indicator of how highly I recommend this company. Thanks again guys will be using you again.',
    name: "DAVID MOORE",
    date: "NOVEMBER 28, 2019"
  },
];
const RootStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  position: 'relative'
}));
// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { rate, avatar, description, name, date } = item;

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    console.log({name})
    console.log(`${name.split(' ')[0][0]}${name.split(' ')[1][0]}`)
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: 'white'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <>
      <Box
        className="commentItem"
        sx={{
          bottom: 0,
          boxShadow: 'rgb(0 0 0 / 10%) 2px 2px 2px 0',
          boxSizing: 'border-box',
          color: '#fff',
          height: 'auto',
          left: 0,
          position: 'relative',
          right: 0,
          textSizeAdjust: '100%',
          top: 0,
          columnRuleColor: '#fff',
          perspectiveOrigin: '277.5px 69px',
          transformOrigin: '277.5px 69px',
          background: '#fff none repeat scroll 0 0/auto padding-box border-box',
          border: '1px solid #f5f5f5',
          font: 'normal normal normal normal 13px/20.8px "Helvetica Neue",Helvetica,Arial,sans-serif',
          margin: '0 0 25px',
          outline: '#fff none 0',
          padding: '20px 25px 20px 48px',
        }}
      >
        <Rating name="read-only" value={rate} readOnly />
        <Typography sx={{
          color: '#111',
          fontStyle: 'italic',
          fontSize: '14px'
        }}>
          {description}
        </Typography>
      </Box>
      <Stack direction="row" spacing={3} alignItems="center">
        <Avatar {...stringAvatar(name)} />
        <Stack alignItems={'flex-start'}>
          <Typography sx={{ fontSize: "12px" }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {date}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default function CarouselCenterMode() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    slidesToShow: 4,
    arrows: false,
    dots: true,
    // centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: '20px',
    height: 'auto',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Slider>
      <CarouselControlsArrowsBasic2 onNext={handleNext} onPrevious={handlePrevious} />
    </RootStyle>
  );
}
