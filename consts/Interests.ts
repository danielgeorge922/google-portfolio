import { GiMuscleUp, GiCape } from "react-icons/gi";
import { FaSnowboarding } from "react-icons/fa";
import { PiLegoFill } from "react-icons/pi";

export const interests = [
  {
    name: "Legos",
    icon: PiLegoFill,
    description: "Building and collecting LEGO sets",
    hoverColor: "group-hover:text-red-500",
  },
  {
    name: "Gym",
    icon: GiMuscleUp,
    description: "Staying active and fitness training",
    hoverColor: "group-hover:text-green-500",
  },
  {
    name: "Comics",
    icon: GiCape,
    description: "Marvel, DC, and comic book culture",
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "Snowboarding",
    icon: FaSnowboarding,
    description: "Hitting the slopes in winter",
    hoverColor: "group-hover:text-cyan-500",
  },
];
