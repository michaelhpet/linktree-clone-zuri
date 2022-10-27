import { styled } from '@mui/material';
import Link from 'next/link';
import { ButtonLinkProps } from '../utils/buttonLinks';

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link href={props.href} passHref>
      <StyledLink id={props.id}>{props.label}</StyledLink>
    </Link>
  );
}

const StyledLink = styled('a')(({ theme }) => ({
  // container
  display: 'block',

  // text
  color: 'rgba(16, 24, 40, 1)',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  textDecoration: 'none',
  textAlign: 'center',

  // background
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
  border: '1px solid rgba(234, 236, 240, 1)',
  borderRadius: theme.spacing(1),
  background: 'rgba(234, 236, 240, 1)',

  '&:hover': {
    background: 'rgba(208, 213, 221, 1)',
    borderColor: 'rgba(208, 213, 221, 1)',
  },

  '&:active': {
    borderColor: 'rgba(152, 162, 179, 1)',
  },
}));