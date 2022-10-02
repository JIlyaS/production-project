// import cls from './Button.module.scss';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}


// Компонент для тестирования
export const BugButton: React.FC<ButtonProps> = (props) => {
  const {
    children,
    ...otherProps
  } = props;
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button
      type="button"
      onClick={onThrow}
      {...otherProps}
    >
      {children}
    </button>
  );
};

BugButton.defaultProps = {
  className: '',
  children: null,
  theme: null
}
