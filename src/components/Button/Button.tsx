import classNames from "classnames";
import React from "react";

type TButtonProps = {
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({ type = "submit", containerClassName, className, children, isLoading, onClick }: TButtonProps) => {
  return (
    <div className={containerClassName}>
      <button
        type={type}
        className={classNames(
          "w-full bg-blue-500 py-3 px-2 text-center text-sm uppercase text-white hover:bg-blue-400",
          { "pointer-events-none cursor-not-allowed select-none bg-opacity-50 hover:bg-opacity-50": isLoading },
          `${className}`,
        )}
        disabled={isLoading}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
