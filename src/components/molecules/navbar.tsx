import { navItems } from "../../data/navItems";
import { NavProps } from "../../types/nav";

const NavItem: React.FC<NavProps> = ({ icon: Icon, label, isActive }) => (
  <div
    className={`flex items-center h-full gap-1 cursor-pointer px-2 font-semibold  
      ${isActive ? "text-pri border-pri border-b-[1.5px] " : "text-neu-1"}`}
  >
    <Icon className={`font-semibold ${isActive ? "text-pri" : "text-neu-1"}`} />
    <p className={isActive ? "text-pri" : "text-neu-1"}>{label}</p>
  </div>
);

export const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center gap-6 h-16 border-b-[1.5px] border-gray-200 px-4 lg:px-16 bg-white">
      {navItems.map(({ icon, label, isActive }) => (
        <NavItem key={label} icon={icon} label={label} isActive={isActive} />
      ))}
    </nav>
  );
};
