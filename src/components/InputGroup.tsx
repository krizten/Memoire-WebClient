import React, { FunctionComponent, ChangeEventHandler } from 'react';

interface Props {
  label: 'name' | 'email' | 'password' | 'confirmPassword' | string;
  name: 'name' | 'email' | 'password' | 'confirmPassword' | string;
  type: 'text' | 'email' | 'password';
  id?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<any>;
  error?: string;
}

export const InputGroup: FunctionComponent<Props> = ({
  label,
  id,
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group-container">
      <div className="form-group">
        <label htmlFor={label}>
          <i className={error ? `${cssStyle(name)} has-error` : cssStyle(name)} />
        </label>
        <input
          className={error ? 'has-error' : undefined}
          type={type}
          name={name}
          id={id ? id : name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {error ? <p className="error-feedback">{error}</p> : null}
    </div>
  );
};

const cssStyle = (name: string) => {
  switch (name) {
    case 'name':
      return 'zmdi zmdi-account material-icons-name';
    case 'email':
      return 'zmdi zmdi-email';
    case 'password':
      return 'zmdi zmdi-lock';
    case 'confirmPassword':
      return 'zmdi zmdi-lock-outline';
  }
};
