import { forwardRef, useId } from 'react';
import type { SelectHTMLAttributes } from 'react';

import { cx } from '../core/utils/cx';
import { Icon } from './Icon';
import styles from './Select.module.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  helperText?: string;
  error?: string;
  wrapperClassName?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      id,
      label,
      helperText,
      error,
      className,
      wrapperClassName,
      children,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const message = error ?? helperText;
    const messageId = message ? `${selectId}-message` : undefined;
    const describedBy = cx(props['aria-describedby'], messageId) || undefined;

    return (
      <div className={cx(styles.field, wrapperClassName)}>
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
        <div className={styles.control}>
          <select
            ref={ref}
            id={selectId}
            className={cx(styles.select, error && styles.invalid, className)}
            aria-invalid={error ? true : props['aria-invalid']}
            aria-describedby={describedBy}
            {...props}
          >
            {children}
          </select>
          <Icon
            className={styles.chevron}
            name="chevron-down"
            size={18}
          />
        </div>
        {message ? (
          <p
            id={messageId}
            className={cx(styles.message, error && styles.errorMessage)}
            role={error ? 'alert' : undefined}
          >
            {error ? <Icon name="alert-circle" size={16} /> : null}
            <span>{message}</span>
          </p>
        ) : null}
      </div>
    );
  },
);
