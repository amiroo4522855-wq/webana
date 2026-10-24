import { useTheme } from '../core/theme/useTheme';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Tooltip } from './Tooltip';

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const nextThemeLabel = resolvedTheme === 'dark' ? 'روشن' : 'تاریک';
  const label = `تغییر به حالت ${nextThemeLabel}`;

  return (
    <Tooltip label={label} side="bottom" align="end">
      <IconButton
        label={label}
        variant="secondary"
        onClick={toggleTheme}
      >
        <Icon name={resolvedTheme === 'dark' ? 'sun' : 'moon'} />
      </IconButton>
    </Tooltip>
  );
}
