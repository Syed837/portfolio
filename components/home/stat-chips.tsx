import { projects } from "@/data/projects";

const stats = [
  { value: `${projects.length}`, label: "Shipped projects" },
  { value: "50+", label: "LeetCode solved" },
  { value: "100%", label: "SSC score" },
];

export function StatChips() {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-mono text-2xl font-semibold text-foreground">{stat.value}</dd>
          <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </dl>
  );
}
