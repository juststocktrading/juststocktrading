export function Stamp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex -rotate-2 items-center gap-2 rounded-sm border-2 border-[#B54A32] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.18em] text-[#B54A32] ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.28em] text-[#B54A32]">
      {children}
    </p>
  );
}
