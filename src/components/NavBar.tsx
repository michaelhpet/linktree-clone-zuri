import { styled, Grid, Stack, Typography } from '@mui/material';
import Camera from '../icons/CameraIcon';
import Share from '../icons/ShareIcon';
import profileImage from '../images/profile-image.jpeg';

export default function NavBar() {
  return (
    <GridContainer spacing={3}>
      <GridItem xs={2} sm={4} />

      <GridItem xs={8} sm={4}>
        <Stack spacing={3} alignItems='center' mt='20px'>
          <Avatar>
            <CameraIcon />
          </Avatar>

          <DisplayName>Annette Black</DisplayName>
        </Stack>
      </GridItem>

      <GridItem xs={2} sm={4}>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </GridItem>
    </GridContainer>
  );
}

const GridContainer = styled((props: any) => <Grid container {...props} />)(
  ({ theme }) => ({
    paddingTop: 44,
    paddingBottom: 56,

    [theme.breakpoints.down('sm')]: {
      paddingBottom: 32,
    },
  })
);

const GridItem = styled((props: any) => <Grid item {...props} />)({
  display: 'flex',
  justifyContent: 'center',
});

const Avatar = styled('div')({
  position: 'relative',
  width: 88,
  height: 88,
  borderRadius: '50%',
  background: `url(${profileImage.src})`,
  backgroundSize: '88px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'overlay',
  transition: 'all 0.2s',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(52, 64, 84, 0.75)',

    '& .MuiSvgIcon-root': { opacity: 1 },
  },

  '&:active': {
    outline: 'solid 5.5px rgba(235, 233, 254, 1)',
  },
});

const DisplayName = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '30px',
  letterSpacing: '0em',
  textAlign: 'center',
});

const IconButton = styled('div')({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: '50%',
  border: '1px dashed rgba(208, 213, 221, 1)',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(249, 250, 251, 1)',
  },

  '&:active': {
    outline: 'solid 1px rgba(242, 244, 247, 1)',
  },
});

const ShareIcon = styled(Share)({
  width: '15.19px',
  height: '14.01px',
  color: 'transparent',
});

const CameraIcon = styled(Camera)({
  position: 'absolute',
  bottom: 11,
  right: 34,
  color: 'transparent',
  opacity: 0,
});
