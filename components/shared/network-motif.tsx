import { cn } from "@/lib/utils";

/**
 * Signature decorative element: an abstract network/traceroute graph with
 * animated dashed "packet flow" lines. Ties the visual language directly to
 * the person's actual focus (network & zero-trust systems) instead of a
 * generic gradient blob.
 */
export function NetworkMotif({ className }: { className?: string }) {
  const nodes = [
    { x: 60, y: 220, r: 5 },
    { x: 170, y: 90, r: 7 },
    { x: 170, y: 340, r: 6 },
    { x: 300, y: 60, r: 5 },
    { x: 300, y: 220, r: 9 },
    { x: 300, y: 370, r: 5 },
    { x: 400, y: 140, r: 6 },
    { x: 400, y: 300, r: 5 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
  ];

  return (
    <svg
      viewBox="0 0 440 420"
      aria-hidden="true"
      className={cn("h-full w-full text-accent-blue", className)}
      fill="none"
    >
      {edges.map(([a, b], i) => {
        const from = nodes[a];
        const to = nodes[b];
        if (!from || !to) return null;
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeOpacity={0.28}
            strokeWidth={1.4}
            strokeDasharray="5 7"
            className="animate-dash-flow"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        );
      })}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="currentColor"
          className={i === 4 ? "text-accent-purple animate-pulse-glow" : "text-accent-cyan animate-pulse-glow"}
          style={{ animationDelay: `${i * 0.22}s` }}
        />
      ))}
    </svg>
  );
}
