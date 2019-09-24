import React, { FunctionComponent, MouseEventHandler } from 'react';

import { Button } from '.';

interface Props {
  show: boolean;
  title: string;
  processing: boolean;
  disabled?: boolean;
  handleClose: MouseEventHandler<any>;
  cancelButtonText: string;
  actionButtonText: string;
  actionButtonMethod: MouseEventHandler<any>;
}

export const Dialog: FunctionComponent<Props> = ({
  show,
  title,
  processing,
  disabled,
  children,
  handleClose,
  cancelButtonText,
  actionButtonText,
  actionButtonMethod,
}) => {
  return (
    <div style={show ? { display: 'flex' } : { display: 'none' }} className="modal-container">
      <div className="modal">
        <div className="modal__header">
          <h1>{title}</h1>
          <span onClick={handleClose}>&times;</span>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <Button
            className="modal__button modal__button--cancel"
            type="button"
            name="closeModal"
            text={cancelButtonText}
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
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
