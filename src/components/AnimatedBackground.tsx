export default function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {/* Aurora */}
      <div className="aurora aurora1" />
      <div className="aurora aurora2" />
      <div className="aurora aurora3" />

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 35 }).map((_, i) => {
  const size = 2 + Math.random() * 5;

  return (
    <span
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: 0.25 + Math.random() * 0.75,
        animationDelay: `${Math.random() * 20}s, ${Math.random() * 8}s`,
        animationDuration: `${10 + Math.random() * 15}s`,
      }}
    />
  );
})}
      </div>
    </div>
  );
}