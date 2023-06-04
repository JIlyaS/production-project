import { render, screen } from "@testing-library/react";

import { Button } from './Button';
import { ButtonTheme } from './Button';

describe('Button', () => {
  test('Test button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test theme button', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});