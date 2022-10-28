import { Grid, styled } from '@mui/material';

export default function Footer() {
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const ZuriWrapper = styled('div')({
  position: 'relative',
  height: '24.73px',
  width: '185.03px',
});
