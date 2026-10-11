export default function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
