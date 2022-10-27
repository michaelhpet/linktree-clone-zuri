import { Stack, styled } from '@mui/material';

export default function Footer() {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'></Stack>
  );
}

const IconLink = styled('a')({
  textDecoration: 'none',
});
