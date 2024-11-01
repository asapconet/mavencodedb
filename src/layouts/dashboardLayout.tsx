import { Header } from "components/molecules/header";
import { NavBar } from "components/molecules/navbar";

interface IProps {
  children: React.ReactNode;
}
export const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
};
