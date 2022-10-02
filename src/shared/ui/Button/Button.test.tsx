import { render, screen } from "@testing-library/react";

import { Button } from './Button';
import { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Test button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test theme button', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});