interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}