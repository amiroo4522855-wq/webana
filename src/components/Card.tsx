import type { HTMLAttributes } from 'react';

import { cx } from '../core/utils/cx';
import styles from './Card.module.css';

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'section';
  padded?: boolean;
};

export function Card({
  as: Component = 'div',
  padded = true,
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={cx(styles.card, padded && styles.padded, className)}
      {...props}
    />
  );
}
