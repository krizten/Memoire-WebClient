import React, { FunctionComponent, MouseEventHandler } from 'react';

interface Props {
  name: string;
  text: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  processing?: boolean;
  className?: string;
  onClick: MouseEventHandler<any>;
}

export const Button: FunctionComponent<Props> = ({
  name,
  text,
  type = 'button',
  className,
  disabled = false,
  processing = false,
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
      {processing ? <i className="ml-3 fas fa-spinner fa-spin" /> : null}
    </button>
  );
};
