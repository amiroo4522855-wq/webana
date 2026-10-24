import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

import { cx } from '../core/utils/cx';
import styles from './IconButton.module.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: 'ghost' | 'secondary';
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { label, className, variant = 'ghost', type = 'button', ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        aria-label={label}
        className={cx(styles.iconButton, styles[variant], className)}
        {...props}
      />
    );
  },
);
