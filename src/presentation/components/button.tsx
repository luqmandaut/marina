import React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isOutline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  roundedMd?: boolean;
  type?: 'submit' | 'button' | 'reset';
}

const Button: React.FC<Props> = ({
  type = 'button',
  children,
  onClick,
  className = '',
  disabled = false,
  isOutline = false,
  roundedMd = false,
}: Props) => {
  const classes = cx(
    'text-lg antialiased font-bold tracking-wide py-2 px-4 focus:outline-none focus:shadow-outline',
    className,
    { 'bg-primary text-white': !isOutline },
    { 'text-primary bg-white shadow-innerBtnBorder': isOutline },
    { 'rounded-3xl': !roundedMd },
    { 'rounded-md': roundedMd }
  );

  return (
    <button className={classes} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
