interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {/* Badge */}
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        {badge}
      </span>

      {/* Title */}
      <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}