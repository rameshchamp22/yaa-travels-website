import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  href,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
          : "rounded-xl border border-blue-700 px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
      }
    >
      {text}
    </Link>
  );
}