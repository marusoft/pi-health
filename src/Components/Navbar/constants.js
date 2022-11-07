import Heart from '../../Assets/svg/heart.svg';
import { AiOutlineCaretDown } from 'react-icons/ai';
import routes from '../../Routes/routes.const';

export const heart = Heart;

export const LOGO = {
  label: 'Pi-Health',
  route: routes.root,
  icon: Heart,
};

const NAV_CONTENT = [
  {
    label: 'Home',
    route: routes.root,
  },
  {
    label: 'How it works',
    route: routes.howItWorks,
  },
  {
    icon: <AiOutlineCaretDown className="text-white" />,
    label: 'Products',
    subList: [
      { label: 'Pi-Elderly', route: routes.elderly },
      { label: 'Pi-Pet', route: routes.pet },
      { label: 'Pi-Sport', route: routes.sports },
      { label: 'Pi-Kids', route: routes.kids },
    ],
  },
  {
    label: 'Features',
    route: routes.features,
  },
  {
    icon: <AiOutlineCaretDown className="text-white" />,
    label: 'Programs',
    subList: [
      { label: 'Program-one', route: routes.elderly },
      { label: 'Program-two', route: routes.pet },
      { label: 'Program-three', route: routes.sports },
    ],
  },
  {
    icon: <AiOutlineCaretDown className="text-white" />,
    label: 'Stakeholders',
    subList: [
      { label: 'program-one', route: routes.programOne },
      { label: 'program-two', route: routes.programTwo },
      { label: 'program-three', route: routes.programThree },
    ],
  },
  {
    label: 'Contact',
    route: routes.contact,
  },
];

export default NAV_CONTENT;
