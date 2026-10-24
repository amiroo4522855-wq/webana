import type { HTMLAttributes } from 'react';

import { cx } from '../core/utils/cx';
import styles from './Badge.module.css';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'neutral' | 'info' | 'success' | 'danger' | 'gold';
};

export function Badge({
  className,
  variant = 'neutral',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(styles.badge, styles[variant], className)}
      {...props}
    />
  );
}
