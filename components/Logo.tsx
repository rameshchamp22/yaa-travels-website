import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "small" | "large";
}

export default function Logo({ size = "small" }: LogoProps) {
  const isLarge = size === "large";

  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo/yaa-logo.png"
        alt="YAA Travels"
        width={isLarge ? 70 : 56}
        height={isLarge ? 70 : 56}
        priority
      />

      <div>
        <h1
          className={`font-extrabold tracking-wide ${
            isLarge ? "text-4xl" : "text-2xl"
          }`}
        >
          <span className="text-[#155EEF]">YAA</span>{" "}
          <span className="text-[#F4B400]">TRAVELS</span>
        </h1>

        <p
          className={`text-slate-500 ${
            isLarge ? "text-base" : "text-xs"
          }`}
        >
          Your Trusted Travel Partner
        </p>
      </div>
    </Link>
  );
}