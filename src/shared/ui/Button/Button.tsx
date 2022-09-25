import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const CButton: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CButton.defaultProps = {
  className: '',
  children: null,
  theme: null
}