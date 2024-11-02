import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  type?: "submit" | "button";
  to?: string;
  className?: string;
}

export const McButton: React.FC<IProps> = ({
  children,
  type = "button",
  to,
  className,
}) => {
  const buttonClasses = classNames(
    "outline-none rounded-lg h-[3rem] w-full py-2 font-medium text-center border-[.4px] border-neu-1",
    type === "submit" ? "bg-pri text-white" : "bg-transparent text-nue-2",
    className
  );

  return to ? (
    <a href={to} className={buttonClasses}>
      {children}
    </a>
  ) : (
    <button type={type} className={buttonClasses}>
      {children}
    </button>
  );
};
