
function CircleFillIcon({ className }: { className: string }) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
    >
      <path d="M16 8 A8 8 0 0 1 8 16 A8 8 0 0 1 0 8 A8 8 0 0 1 16 8 z" />
    </svg>
  );
}

export default CircleFillIcon;