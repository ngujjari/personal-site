import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// see import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/ngujjari',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/d',
    label: 'Facebook',
    icon: faFacebookF,
  },
  /*
  {
    link: 'https://www.instagram.com/dangelosaurus/',
    label: 'Instagram',
    icon: faInstagram,
  },  */
  {
    link: 'https://www.linkedin.com/in/naresh-gujjari-772b5810',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  /*
  {
    link: 'https://angel.co/michael-d-angelo',
    label: 'Angel List',
    icon: faAngellist,
  },  */
  {
    link: 'https://twitter.com/gujjarinaresh',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:ngujjari2021@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
