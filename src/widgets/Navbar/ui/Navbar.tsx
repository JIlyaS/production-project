import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (<div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
    </div>
  </div>);
}

