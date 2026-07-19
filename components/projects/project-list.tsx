export function ProjectList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
