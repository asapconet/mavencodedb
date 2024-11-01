import { Header } from "components/molecules/header";

interface IProps {
  children: React.ReactNode;
}
export const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
