import classNames from "classnames";
import { RiSearch2Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { InputType } from "../../../types/input";

const McInput = ({
  textarea,
  errors,
  label,
  className,
  register,
  name = "",
  ...rest
}: InputType) => {
  const icons: any = {
    search: (
      <RiSearch2Line
        size={20}
        className="text-neu-1"
        role="img"
        aria-label="search icon"
      />
    ),
    email: (
      <CiMail
        size={20}
        className="text-neu-1"
        role="img"
        aria-label="email icon"
      />
    ),
  };

  return (
    <div className="w-full text-left">
      {label && (
        <label htmlFor={name} className="text-xl font-[500]">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={name}
          className={classNames(
            `outline-none rounded-lg h-[3rem] w-full py-2 bg-neu-100 text-neu-2 font-[300] 
            border-[.4px] border-neu-1`,
            rest.type === "email"
              ? "px-8"
              : rest.type === "search"
                ? "px-8 pr-2"
                : "",
            errors ? "border-err" : "",
            className
          )}
          {...(register && name ? register(name) : {})}
          {...rest}
        />
        {rest.type === "search" && (
          <span className="absolute left-2 top-[11px]">{icons.search}</span>
        )}
      </div>
      {errors && (
        <span className="block mt-1 italic text-sm text-red-700 transition duration-700">
          {errors.message}
        </span>
      )}
    </div>
  );
};

McInput.displayName = "McInput";
export default McInput;
