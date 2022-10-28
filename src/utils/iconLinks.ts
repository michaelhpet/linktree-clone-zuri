import GitHubIcon from '../icons/GitHubIcon';
import SlackIcon from '../icons/SlackIcon';

interface IconLink {
  id: string;
  href: string;
  icon: any;
}

const iconLinks: IconLink[] = [
  {
    id: 'slack',
    href: '#',
    icon: SlackIcon,
  },
  {
    id: 'github',
    href: 'https://github.com/michael-peter/linktree-clone',
    icon: GitHubIcon,
  },
];

export default iconLinks;
