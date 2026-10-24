import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { cx } from '../core/utils/cx';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SharedButtonProps;

type ButtonLinkProps = Omit<LinkProps, 'className'> &
  SharedButtonProps & {
    className?: string;
  };

function getButtonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  className?: string,
): string {
  return cx(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      type = 'button',
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={getButtonClassName(variant, size, fullWidth, className)}
        {...props}
      />
    );
  },
);

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      ...props
    },
    ref,
  ) {
    return (
      <Link
        ref={ref}
        className={getButtonClassName(variant, size, fullWidth, className)}
        {...props}
      />
    );
  },
);
