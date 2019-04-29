import React, { FunctionComponent, MouseEventHandler } from 'react';

interface Props {
  name: string;
  text: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
  onClick: MouseEventHandler<any>;
}

export const Button: FunctionComponent<Props> = ({
  name,
  text,
  type = 'button',
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={className ? `${className} button` : 'button'}
      name={name}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
