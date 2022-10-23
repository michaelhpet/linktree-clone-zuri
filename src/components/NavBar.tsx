import { IconButton as MuiIconButton, Stack, styled } from '@mui/material';
import Image from 'next/image';
import Share from '../icons/ShareIcon';
import profileImage from '../images/profile-image.jpeg';

export default function NavBar() {
  return (
    <Stack direction='row' alignItems='center'>
      <Avatar>
        <Image
          id='profile__img'
          src={profileImage}
          layout='fill'
          objectFit='cover'
        />
      </Avatar>

      <IconButton>
        <ShareIcon />
      </IconButton>
    </Stack>
  );
}

const Avatar = styled('div')({
  position: 'relative',
  width: 88,
  height: 88,
  borderRadius: '50%',

  '& img': {
    borderRadius: '50%',
  },
});

const IconButton = styled(MuiIconButton)({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '1px dashed #D0D5DD',
});

const ShareIcon = styled(Share)({
  width: '15.19px',
  height: '14.01px',
  color: '#98A2B3',
});
