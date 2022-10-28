import { Container } from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout(props: any) {
  return (
    <Container>
      <NavBar />
      {props.children}
      <Footer />
    </Container>
  );
}
