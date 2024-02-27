import {
  AmbassadorIcon,
  BackendIcon,
  GamesIcon,
  ProgramsIcon,
  WebDevIcon,
} from "../components/icons/navbarIcons";

export type NavbarProps = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const navbarData = [
  {
    name: "Ambassador",
    icon: AmbassadorIcon,
    description:
      "Find the perfect program for you from 75+ ambassador and fellowship programs from all over the world.",
  },
  {
    name: "Backend",
    icon: BackendIcon,
    description:
      "Looking for a backend service for your next project? We've got you covered with a list of the best ones out there!",
  },
  {
    name: "WebDev",
    icon: WebDevIcon,
    description:
      "Power up your website with awesome tools from CSS generators and stock photos, to icons, illustrations much more.",
  },
  {
    name: "Games",
    icon: GamesIcon,
    description:
      "Ever heard of 'All work and no play makes the developer dull' ? Here's your chance to mix some play into your work !",
  },
  {
    name: "Programs",
    icon: ProgramsIcon,
    description:
      "Looking for an open-source program to apply to? You're just a click away. Find all details right here!",
  },
];
