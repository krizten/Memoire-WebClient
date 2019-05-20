import React, { Component, Fragment } from 'react';

import { OutlineButton, ImagePicker } from './';
import noImage from '../assets/img/image.svg';

interface Props {
  image?: string | undefined;
}

interface State {
  show: boolean;
}

export class ImageUploader extends Component<Props, State> {
  state: State = {
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onChange = () => {};

  uploadImage = () => {};

  render() {
    const { image } = this.props;
    const { show } = this.state;
    return (
      <Fragment>
        <div className="uploader">
          <div className="uploader__image">
            <img src={image ? image : noImage} alt="Entry Image" />
          </div>
          <div className="uploader__controls">
            <OutlineButton type="button" className="outline-button--danger mr-1" disabled={!image}>
              <span>Remove</span> <i className="far fa-trash-alt" />
            </OutlineButton>
            <OutlineButton onClick={this.showModal} type="button" className="ml-1">
              <span>{image ? 'Change' : 'Add'}</span> <i className="far fa-file-image" />
            </OutlineButton>
          </div>
        </div>
        <ImagePicker
          show={show}
          processing={false}
          handleClose={this.hideModal}
          modalTitle="Upload Entry Image"
          onChange={this.onChange}
          actionButtonText="Upload"
          actionButtonMethod={this.uploadImage}
        />
      </Fragment>
    );
  }
}
