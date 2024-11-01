import { CiHome, CiCalendar } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbPhoto } from "react-icons/tb";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { NavProps } from "../types/nav";

export const navItems: NavProps[] = [
  { icon: CiHome, label: "Home", isActive: true },
  { icon: FiBox, label: "Interface" },
  { icon: CiCalendar, label: "Component" },
  { icon: LuFileSpreadsheet, label: "Pages" },
  { icon: IoMdCheckboxOutline, label: "Forms" },
  { icon: TbPhoto, label: "Gallery" },
  { icon: BsFillFileEarmarkSpreadsheetFill, label: "Documentation" },
];
