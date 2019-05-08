import React, { FunctionComponent, MouseEventHandler, ChangeEventHandler } from 'react';
import { Button, InputGroup } from './';

interface Props {
  show: boolean;
  processing: boolean;
  handleClose: MouseEventHandler<any>;
  type: 'email' | 'password';
  name: string;
  id: string;
  placeholder: string;
  modalTitle: string;
  instruction: string;
  value: string;
  feedback?: string;
  error?: string;
  actionButtonText: string;
  actionButtonMethod: MouseEventHandler<any>;
  onChange: ChangeEventHandler<any>;
}

export const Modal: FunctionComponent<Props> = ({
  show,
  processing,
  handleClose,
  type,
  name,
  id,
  placeholder,
  modalTitle,
  instruction,
  value,
  feedback,
  error,
  actionButtonText,
  actionButtonMethod,
  onChange,
}) => {
  return (
    <div style={show ? { display: 'flex' } : { display: 'none' }} className="modal-container">
      <div className="modal">
        <div className="modal__header">
          <h1>{modalTitle}</h1>
          <span onClick={handleClose}>&times;</span>
        </div>
        <div className="modal__body form">
          <div className="form__header">{instruction}</div>
          <div className="form__body">
            <form className="forgot-password-form">
              <InputGroup
                label={id}
                name={name}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
            </form>
          </div>
          <div className="form__footer">
            <p className={error ? 'has-error' : undefined}>{feedback}</p>
          </div>
        </div>
        <div className="modal__footer">
          <Button
            className="modal__button modal__button--cancel"
            type="button"
            name="closeModal"
            text="Cancel"
            onClick={handleClose}
            processing={false}
            disabled={false}
          />
          <Button
            className="modal__button modal__button--action"
            type="button"
            name="resetPassword"
            text={actionButtonText}
            onClick={actionButtonMethod}
            processing={processing}
            disabled={processing}
          />
        </div>
      </div>
    </div>
  );
};
