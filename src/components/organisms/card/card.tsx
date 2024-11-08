import { forwardRef } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { CardProps } from "src/types/card";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, growthRate, className, ...rest }, ref) => {
    const isPositiveGrowth = growthRate >= 0;

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center bg-white rounded-sm border border-1
        cursor-pointer shadow p-4 relative overflow-hidden h-[205px] ${className}
        transition-transform transform hover:scale-105 hover:shadow-lg delay-150 duration-200 ease-in-out`}
        {...rest}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-5xl">{title}</h1>
          <p className="mt-2 text-lg text-neu-2 text-semibold flex-1 capitalize">
            {description}
          </p>
          <div
            className={`${isPositiveGrowth ? "text-succ" : "text-err"} absolute top-2 right-2
             flex items-center gap-1 font-semibold`}
          >
            <span>
              {isPositiveGrowth ? "+" : "-"} {Math.abs(growthRate)}%
            </span>
            {isPositiveGrowth ? (
              <FaAngleUp
                className="text-green-500"
                data-testid="positive-icon"
              />
            ) : (
              <FaAngleDown className="text-err" data-testid="negative-icon" />
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
