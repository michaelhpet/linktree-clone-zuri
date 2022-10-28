export interface ButtonLinkProps {
  id: string;
  href: string;
  label: string;
}

const buttonLinks: ButtonLinkProps[] = [
  {
    id: 'twitter',
    href: 'https://twitter.com/PeterHMichael',
    label: 'Twitter Link',
  },
  {
    id: 'btn__zuri',
    href: 'https://training.zuri.team/',
    label: 'Zuri Team',
  },
  {
    id: 'books',
    href: 'http://books.zuri.team/',
    label: 'Zuri Books',
  },
  {
    id: 'book__python',
    href: 'https://books.zuri.team/',
    label: 'Python Books',
  },
  {
    id: 'pitch',
    href: 'https://background.zuri.team/',
    label: 'Background Check for Coders',
  },
  {
    id: 'book__design',
    href: 'https://books.zuri.team/design-rules',
    label: 'Design Books',
  },
];

export default buttonLinks;
