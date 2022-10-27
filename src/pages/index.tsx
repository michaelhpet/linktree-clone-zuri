import { Stack } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ButtonLink from '../components/ButtonLink';
import buttonLinks from '../utils/buttonLinks';

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={3}>
        {buttonLinks.map((link) => (
          <ButtonLink
            key={link.id}
            id={link.id}
            href={link.href}
            label={link.label}
          />
        ))}
      </Stack>
    </Layout>
  );
};

export default Home;
