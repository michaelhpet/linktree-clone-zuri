import { Stack, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={3}>
        {[0, 1, 2, 3, 4, 5].map((itm) => (
          <LinkButton key={itm} href='#' label='Button' />
        ))}
      </Stack>
    </Layout>
  );
};

export default Home;
