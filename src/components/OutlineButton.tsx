import React, { FunctionComponent, MouseEventHandler } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset';
  className?: string | undefined;
  onClick?: MouseEventHandler<any>;
  disabled?: boolean;
}

export const OutlineButton: FunctionComponent<Props> = ({
  type,
  className,
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={className ? `outline-button ${className}` : 'outline-button'}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
