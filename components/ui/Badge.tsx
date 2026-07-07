interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-blue-200/40
      bg-white/10
      px-4
      py-2
      text-sm
      font-semibold
      text-white
      backdrop-blur-xl
      "
    >
      {children}
    </span>
  );
}