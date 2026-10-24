type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="48" height="48" rx="14" fill="currentColor" />
      <path
        d="M10 14H16.4L19.5 26.1L23.4 14H28.6L32.5 26.1L35.6 14H42L35.2 34H29.7L26 23.2L22.3 34H16.8L10 14Z"
        fill="var(--color-mark-foreground)"
      />
    </svg>
  );
}
