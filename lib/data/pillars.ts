import {
  AngleIcon,
  GlobeIcon,
  RocketIcon,
  TransformIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/themes";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface PillarI {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

export const PILLARS: PillarI[] = [
  {
    icon: AngleIcon,
    title: "Alignment",
    description:
      "We assess your objectives, constraints, and operating environment to shape a delivery plan that meets both strategic and technical goals.",
  },
  {
    icon: TransformIcon,
    title: "Framework",
    description:
      "We implement a structured approach that blends agile execution with delivery oversight, ensuring pace, clarity, and full visibility from start to finish.",
  },
  {
    icon: RocketIcon,
    title: "Enablement",
    description:
      "We deploy the right platforms, tools, and domain expertise to build capability within your environment and accelerate execution.",
  },
  {
    icon: GlobeIcon,
    title: "Reach",
    description:
      "We extend delivery capacity through a trusted network of technical specialists and partners, allowing us to scale and adapt without compromising quality.",
  },
];
