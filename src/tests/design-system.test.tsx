import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { IconButton } from '../components/IconButton';
import { Select } from '../components/Select';
import { Tooltip } from '../components/Tooltip';

describe('shared design system components', () => {
  it('supports button variants and blocks disabled actions', () => {
    const handleClick = vi.fn();
    const { rerender } = render(
      <Button variant="danger" onClick={handleClick}>
        حذف
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'حذف' });
    expect(button.className).toContain('danger');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    rerender(
      <Button variant="danger" disabled onClick={handleClick}>
        حذف
      </Button>,
    );
    expect(button).toHaveProperty('disabled', true);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('gives icon buttons an accessible name and tooltip description', () => {
    render(
      <Tooltip label="حالت تاریک" side="bottom">
        <IconButton label="حالت تاریک">
          <Icon name="moon" />
        </IconButton>
      </Tooltip>,
    );

    const button = screen.getByRole('button', { name: 'حالت تاریک' });
    const tooltipId = button.getAttribute('aria-describedby');
    expect(tooltipId).toBeTruthy();

    const tooltip = document.getElementById(tooltipId ?? '');
    expect(tooltip?.getAttribute('role')).toBe('tooltip');
    expect(tooltip?.textContent).toBe('حالت تاریک');
  });

  it('associates select labels and exposes errors with text and ARIA', () => {
    const handleChange = vi.fn();
    render(
      <Select
        label="حالت نمایش"
        defaultValue="light"
        error="انتخاب معتبر نیست."
        onChange={handleChange}
      >
        <option value="light">روشن</option>
        <option value="dark">تاریک</option>
      </Select>,
    );

    const select = screen.getByLabelText('حالت نمایش');
    expect(select.getAttribute('aria-invalid')).toBe('true');
    expect(screen.getByRole('alert').textContent).toContain(
      'انتخاب معتبر نیست.',
    );

    fireEvent.change(select, { target: { value: 'dark' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveProperty('value', 'dark');
  });
});
