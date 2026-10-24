import { cloneElement, useId } from 'react';
import type { ReactElement } from 'react';

import { cx } from '../core/utils/cx';
import styles from './Tooltip.module.css';

type TooltipTriggerProps = {
  'aria-describedby'?: string;
};

type TooltipProps = {
  label: string;
  children: ReactElement<TooltipTriggerProps>;
  side?: 'top' | 'bottom';
  align?: 'center' | 'end';
};

export function Tooltip({
  label,
  children,
  side = 'top',
  align = 'center',
}: TooltipProps) {
  const tooltipId = useId();
  const describedBy = cx(children.props['aria-describedby'], tooltipId);

  return (
    <span className={styles.root}>
      {cloneElement(children, { 'aria-describedby': describedBy })}
      <span
        id={tooltipId}
        role="tooltip"
        className={cx(styles.tooltip, styles[side], styles[align])}
      >
        {label}
      </span>
    </span>
  );
}
