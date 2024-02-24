import { AmbassadorIcon, GamesIcon } from "../components/icons/navbarIcons";

export type NavbarProps = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const navbarData = [
  {
    name: "Ambassador",
    icon: AmbassadorIcon,
  },
  {
    name: "Backend",
    icon: GamesIcon,
  },
  {
    name: "Development",
    icon: GamesIcon,
  },
  {
    name: "Games",
    icon: GamesIcon,
  },
  {
    name: "Programs",
    icon: GamesIcon,
  },
];
