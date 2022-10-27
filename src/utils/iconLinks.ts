import GitHubIcon from '../icons/GitHubIcon';
import SlackIcon from '../icons/SlackIcon';

interface IconLink {
  id: string;
  href: string;
  icon: any;
}

const iconLinks: IconLink[] = [
  {
    id: 'asks',
    href: '#',
    icon: SlackIcon,
  },
  {
    id: 'asrw',
    href: '#',
    icon: GitHubIcon,
  },
];

export default iconLinks;
