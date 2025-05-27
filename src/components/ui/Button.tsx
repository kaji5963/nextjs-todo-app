import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
