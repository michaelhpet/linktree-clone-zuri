import { Container } from '@mui/material';
import NavBar from './NavBar';

export default function Layout(props: any) {
  return (
    <Container>
      <NavBar />
      {props.children}
    </Container>
  );
}
