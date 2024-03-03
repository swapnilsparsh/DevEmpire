import { Data, Layout } from "../../interfaces/obj_type";

const BeginnerData: Data[] = [
  {
    link: "https://codeheat.org/",
    head: "Codeheat",
    image: "/images/programs-img/Codeheat.png",
    about: "Codeheat is a coding contest for FOSSASIA projects on GitHub.",
    alt: "Codeheat",
    label: "Beginner Friendly ",
  },
  {
    link: "https://contribute.devincept.com/",
    head: "DevIncept Contribution",
    image: "/images/programs-img/DCP.png",
    about:
      "Open-Source program to bring students into the world of open source development.",
    alt: "DevIncept Contribution",
    label: "Beginner Friendly ",
  },
  {
    link: "https://gssoc.girlscript.tech/",
    head: "GirlScript Summer of Code",
    image: "/images/programs-img/GSSOC.png",
    about: "Open Source Development while encouraging diversity.",
    alt: "GirlScript Summer of Code",
    label: "Beginner Friendly ",
  },
  {
    link: "https://hacktoberfest.digitalocean.com/",
    head: "Hacktoberfest",
    image: "/images/programs-img/Hacktoberfest.png",
    about:
      "Hacktoberfest, is a month-long celebration of open source software run by DigitalOcean.",
    alt: "Hacktoberfest",
    label: "Beginner Friendly",
  },
  {
    link: "https://season.kde.org/",
    head: "Season of KDE",
    image: "/images/programs-img/SoKDE.png",
    about:
      "KDE offer an opportunity to everyone to participate in code and non-code projects. ",
    alt: "Season of KDE",
    label: "Beginner Friendly",
  },
];

const SummerData: Data[] = [
  {
    link: "https://summerofcode.withgoogle.com/",
    head: "Google Summer of Code",
    image: "/images/programs-img/GSoC.png",
    about:
      "Focused on bringing student developers into open source software development.",
    alt: "Google Summer of Code",
    label: "Summer Programs",
  },
  {
    link: "https://osoc.be/",
    head: "Open Summer of Code",
    image: "/images/programs-img/OSOC.jpg",
    about:
      "It is for anyone who brings motivation, enthusiasm. and talent to the table.",
    alt: "Open Summer of Code",
    label: "Summer Programs",
  },
];

const CommunityData: Data[] = [
  {
    link: "https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program",
    head: "LFN Mentorship Program",
    image: "/images/programs-img/LFN.png",
    about: "Aimed at creating a structured hands-on learning opportunity.",
    alt: "LFN Mentorship Program",
    label: "Community Mentorship",
  },
  {
    link: "https://www.outreachy.org/",
    head: "Outreachy",
    image: "/images/programs-img/Outreachy.png",
    about:
      "It is a program that organizes three-month paid internships with free and open-source projects.",
    alt: "Outreachy",
    label: "Community Mentorship",
  },
  {
    link: "https://lfx.linuxfoundation.org/tools/mentorship/",
    head: "LFX Mentorship Program",
    image: "/images/programs-img/LFX.png",
    about:
      "Makes it easy to sponsor and help train the next generation of open source developers.",
    alt: "LFX Mentorship Program",
    label: "Community Mentorship",
  },
];

const DocumentationData: Data[] = [
  {
    link: "https://developers.google.com/season-of-docs",
    head: "Season of Docs",
    image: "/images/programs-img/SoDocs.jpg",
    about:
      "Provides support for open source projects to improve their documentation.",
    alt: "Season of Docs",
    label: "Documentation",
  },
];

const BlockChainData: Data[] = [
  {
    link: "https://wiki.hyperledger.org/display/INTERN",
    head: "Hyperledger Mentorship",
    image: "/images/programs-img/HLF_Mentorship_Program.png",
    about:
      "Contribute and get practical exposure to Hyperledger open source development.",
    alt: "Hyperledger Mentorship Program",
    label: "Blockchain",
  },
  {
    link: "https://www.summerofbitcoin.org/",
    head: "Summer of Bitcoin",
    image: "/images/programs-img/SummerOfBitcoin.png",
    about:
      "Focused on introducing university students to bitcoin open-source development and design.",
    alt: "Hyperledger Mentorship Program",
    label: "Blockchain",
  },
];

const InternshipData: Data[] = [
  {
    link: "https://www.fsf.org/volunteer/internships",
    head: "FSF Internship Program",
    image: "/images/programs-img/fsf.png",
    about:
      "If you know web development, systems, networking, software licensing.",
    alt: "Free Software Foundation (FSF) Internship Program",
    label: "Internship",
  },
];

const opensource_data: Layout[] = [
  {
    subheading: "Beginner Friendly",
    id: "beginner",
    dataSource: BeginnerData,
  },
  {
    subheading: "Summer Programs",
    id: "summer-programs",
    dataSource: SummerData,
  },
  {
    subheading: "Community Mentorship",
    id: "community",
    dataSource: CommunityData,
  },
  {
    subheading: "Documentation",
    id: "documentation",
    dataSource: DocumentationData,
  },
  {
    subheading: "Blockchain",
    id: "blockchain",
    dataSource: BlockChainData,
  },
  {
    subheading: "Internship",
    id: "internship",
    dataSource: InternshipData,
  },
];

export default opensource_data;
