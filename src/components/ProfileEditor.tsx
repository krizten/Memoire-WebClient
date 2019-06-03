import React, { Component, Fragment, MouseEventHandler } from 'react';
import { OutlineButton, ImagePicker } from './';

interface Props {
  email: string;
  entriesCount: number;
  avatar: string;
  cancelUpdateHandler: MouseEventHandler<any>;
}

interface State {
  show: boolean;
  processing: boolean;
}

export class ProfileEditor extends Component<Props, State> {
  state: State = {
    show: false,
    processing: false,
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
    const { avatar, email, entriesCount, cancelUpdateHandler } = this.props;
    const { show, processing } = this.state;

    return (
      <Fragment>
        <form className="profile-editor">
          <div className="profile-editor__bio">
            <div className="profile-editor__avatar" onClick={this.showModal}>
              <div />
              <img src={avatar} alt="User's name" />
            </div>
            <div className="profile-editor__contact-data">
              <input type="text" className="profile-editor__full-name" />
              <p className="profile-editor__email">{email}</p>
            </div>
          </div>
          <div className="profile-editor__stats">
            <div className="profile-editor__data-row profile-editor__data-row--double">
              <div>
                <h3 className="profile-editor__data-title">Date of Birth</h3>
                <input
                  type="date"
                  className="profile-editor__data-content profile-editor__date-of-birth"
                />
              </div>
              <div>
                <h3 className="profile-editor__data-title">Gender</h3>
                <select name="" id="" className="profile-editor__gender">
                  <option className="profile-editor__gender--default">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="profile-editor__data-row profile-editor__data-row--double">
              <div>
                <h3 className="profile-editor__data-title">All Entries Till Date</h3>
                <p className="profile-editor__data-content">{entriesCount}</p>
              </div>
            </div>
            <div className="profile-editor__data-row profile-editor__data-row--single">
              <div>
                <h3 className="profile-editor__data-title">About Me</h3>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={8}
                  placeholder="Write something about yourself..."
                  className="profile-editor__data-content profile-editor__about-me"
                />
              </div>
            </div>
            <div className="profile-editor__controls">
              <OutlineButton
                onClick={cancelUpdateHandler}
                className="button button--cancel"
                type="button"
              >
                Cancel
              </OutlineButton>
              <OutlineButton className="button button--update" type="button">
                Save {processing ? <i className="ml-3 fas fa-spinner fa-spin" /> : null}
              </OutlineButton>
            </div>
          </div>
        </form>
        <ImagePicker
          show={show}
          processing={false}
          handleClose={this.hideModal}
          modalTitle="Upload Avatar"
          onChange={this.onChange}
          actionButtonText="Upload"
          actionButtonMethod={this.uploadImage}
        />
      </Fragment>
    );
  }
}
