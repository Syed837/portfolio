import { profile } from "@/data/profile";

export function TerminalCard() {
  return (
    <div className="glass-card w-full max-w-[280px] px-4 py-3.5 shadow-2xl">
      <div className="mb-2.5 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-blue-2/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
      </div>
      <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
        <code>
          <span className="text-accent-cyan">$</span> whoami{"\n"}
          <span className="text-foreground">{profile.shortName.toLowerCase()}</span>
          {"\n"}
          <span className="text-accent-cyan">$</span> status{"\n"}
          <span className="text-success">✓</span> {profile.availability}
        </code>
      </pre>
    </div>
  );
}
