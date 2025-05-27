import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  href,
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
