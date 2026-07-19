export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-x-0 top-0 h-[70vh]" />
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 bg-gradient-radial-glow blur-3xl" />
      <div className="noise-overlay" />
    </div>
  );
}
