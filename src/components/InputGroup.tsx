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
  let cssClass: string;

  switch (name) {
    case 'name':
      cssClass = 'zmdi zmdi-account material-icons-name';
      return cssClass;
    case 'email':
      cssClass = 'zmdi zmdi-email';
      return cssClass;
    case 'password':
      cssClass = 'zmdi zmdi-lock';
      return cssClass;
    case 'confirmPassword':
      cssClass = 'zmdi zmdi-lock-outline';
      return cssClass;
  }
};
