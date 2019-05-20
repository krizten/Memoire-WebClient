import React, { Component, MouseEventHandler, ChangeEventHandler } from 'react';

import { Button } from './';
import upload from '../assets/img/upload.svg';

interface Props {
  show: boolean;
  processing: boolean;
  handleClose: MouseEventHandler<any>;
  modalTitle: string;
  feedback?: string;
  error?: string;
  actionButtonText: string;
  actionButtonMethod: MouseEventHandler<any>;
  onChange: ChangeEventHandler<any>;
}

interface State {
  imgSrc: any;
}

export class ImagePicker extends Component<Props, State> {
  state: State = {
    imgSrc: upload,
  };

  inputElement: any;

  onChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imgSrc: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  selectImage = () => {
    this.inputElement.click();
  };

  render() {
    const {
      show,
      modalTitle,
      handleClose,
      error,
      feedback,
      actionButtonText,
      actionButtonMethod,
      processing,
    } = this.props;

    const { imgSrc } = this.state;
    return (
      <div style={show ? { display: 'flex' } : { display: 'none' }} className="modal-container">
        <div className="modal">
          <div className="modal__header">
            <h1>{modalTitle}</h1>
            <span onClick={handleClose}>&times;</span>
          </div>
          <div className="modal__body">
            <div className="form__body">
              <div className="picker">
                <button onClick={this.selectImage} className="picker__selector">
                  <div>
                    <img src={imgSrc} alt="upload" />
                  </div>
                  <p>Click to Upload Image</p>
                </button>
                <input
                  onChange={this.onChange}
                  className="picker__file"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg"
                  ref={input => (this.inputElement = input)}
                />
              </div>
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
  }
}
