import type { ReactNode } from 'react';

export type IconName =
  | 'alert-circle'
  | 'arrow-left'
  | 'check'
  | 'chevron-down'
  | 'info'
  | 'moon'
  | 'sun';

const paths: Record<IconName, ReactNode> = {
  'alert-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.25M12 16.5h.01" />
    </>
  ),
  'arrow-left': <path d="M19 12H5m6-6-6 6 6 6" />,
  check: <path d="m6.5 12.5 3.5 3.5 7.5-8" />,
  'chevron-down': <path d="m7 9.5 5 5 5-5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.5h.01" />
    </>
  ),
  moon: <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="3.75" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.72 5.28l-1.42 1.42M6.7 17.3l-1.42 1.42M18.72 18.72l-1.42-1.42M6.7 6.7 5.28 5.28" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size = 20 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
