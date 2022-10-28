import { Stack, styled } from '@mui/material';
import iconLinks from '../utils/iconLinks';

export default function Footer() {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'>
      {iconLinks.map((Link) => (
        <IconLink key={Link.id}>
          <Link.icon />
        </IconLink>
      ))}
    </Stack>
  );
}

const IconLink = styled('a')({
  textDecoration: 'none',
});
