import { LinkProps, styled } from '@mui/material';
import Link from 'next/link';

interface Props {
  label: string;
  href: string;
}

export default function LinkButton(props: Props) {
  return (
    <Link href={props.href} passHref>
      <StyledLink>{props.label}</StyledLink>
    </Link>
  );
}

const StyledLink = styled('a')(({ theme }) => ({
  // text
  color: '#101828',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '28px',
  textAlign: 'center',

  // background
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  border: '1px solid #EAECF0',
  borderRadius: theme.spacing(1),
  background: '#EAECF0',
}));
