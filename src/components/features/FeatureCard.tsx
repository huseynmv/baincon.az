export default function FeatureCard({
  index,
  title,
  Icon,
}: {
  index: number;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="group relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-orange-500/70 opacity-80" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(107,33,168,0.12) 0%, rgba(107,33,168,0.06) 45%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full
                   bg-[radial-gradient(circle_at_center,rgba(255,119,29,0.10),transparent_60%)]
                   scale-0 transition-transform duration-500 group-hover:scale-100"
      />

      <div className="relative z-10 flex flex-col items-center px-6 pb-8 pt-6 text-center">
        <div className="self-start text-lg font-bold text-orange-500">0{index}</div>

        <Icon
          className="my-6 h-14 w-14 text-violet-700 transition-colors duration-300 group-hover:text-white"
          strokeWidth={2.25}
        />

        <div className="text-lg sm:text-xl font-semibold text-gray-900 transition-colors group-hover:text-white">
          {title}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-violet-700 opacity-0 transition-opacity duration-300 group-hover:opacity-90" />
    </div>
  );
}