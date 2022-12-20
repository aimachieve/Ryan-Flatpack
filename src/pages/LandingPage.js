// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingHowWork,
  LandingEquipment,
  LandingAbout,
  LandingCategory,
  LandingDamage,
  LandingConnect,
  LandingQuote
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  marginTop: '-7px'
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Flat Packs | MineSites" id="move_top">
      <LandingHero />
      <ContentStyle>
        {/* <LandingAbout /> */}
        <LandingHowWork />
        <LandingCategory />
        <LandingQuote />
        {/* <LandingEquipment /> */}
        {/* <LandingDamage /> */}
        {/* <LandingConnect /> */}
      </ContentStyle>
    </RootStyle>
  );
}
