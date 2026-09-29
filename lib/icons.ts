import type { IconType } from "react-icons";
import {
  FaPalette,
  FaBriefcase,
  FaBolt,
  FaFire,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa6";

import { GROUPS, SERVICES } from "@/lib/constants";

export const icons: Record<string, IconType> = {
  palette: FaPalette,
  briefcase: FaBriefcase,
  bolt: FaBolt,
  fire: FaFire,
  building: FaBuilding,
};
