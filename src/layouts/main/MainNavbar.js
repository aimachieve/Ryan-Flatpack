import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Typography, Stack } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import AccountPopover from './AccountPopover';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 110;
const APP_BAR_DESKTOP = 130;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.longer
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, backgroundColor: 'white', borderBottom: '1px solid rgba(96,96,96,.13)' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: APP_BAR_DESKTOP - 80 ,
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            // marginTop: { xs: '182px' }
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Logo
                sx={{
                  transition: 'transform 0.3s',
                  ...(isOffset && {
                    transform: 'scale(0.8)'
                  })
                }}
              />
              {
                isOffset ?
                  <MHidden width="mdDown">
                    <Typography sx={{
                      fontSize: '13px',
                      textAlign: 'center',
                      position: 'relative',
                      color: '#333',
                      transition: 'transform 0.3s',
                      ...(isOffset && {
                        transform: 'scale(0.8)'
                      }),
                      ":hover": {
                        color: '#31b34a',
                      }
                    }}>
                      100% Australian Designed & Constructed Custom <br />Minesites Cabinets
                    </Typography>
                  </MHidden> :
                  <MHidden width="mdDown">
                    <Typography sx={{
                      fontSize: '13px',
                      textAlign: 'center',
                      position: 'relative',
                      color: '#333',
                      transition: 'transform 0.3s',
                      ...(isOffset && {
                        transform: 'scale(0.8)'
                      }),
                      ":hover": {
                        color: '#31b34a',
                      }
                    }}>
                      100% Australian Designed & Constructed Custom Minesite Cabinets
                    </Typography>
                  </MHidden>
              }
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />

            <MHidden width="mdDown">
              <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </MHidden>

            {/* {isAuthenticated ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button component={RouterLink} variant="contained" to="/auth/login">
              Login
            </Button>
          )} */}
            {/* <AccountPopover /> */}

            <MHidden width="mdUp">
              <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </MHidden>
          </Stack>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar >
  );
}
