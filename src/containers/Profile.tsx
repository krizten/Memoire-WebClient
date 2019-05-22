import React, { Component, Fragment } from 'react';

import user from '../assets/img/user.png';
import '../styles/pages/profile.scss';
import { OutlineButton, Modal } from '../components';

interface Props {}

interface State {
  showDeleteModal: boolean;
  deletePassword: string;
}

export class Profile extends Component<Props, State> {
  state: State = {
    showDeleteModal: false,
    deletePassword: '',
  };

  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  hideDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  deleteOnChange = (e: any) => {
    this.setState({
      deletePassword: e.target.value,
    });
  };

  deleteSubmit = (e: any) => {
    e.preventDefault();
  };

  render() {
    const { showDeleteModal, deletePassword } = this.state;

    return (
      <Fragment>
        <div className="profile">
          <div className="profile__bio">
            <div className="profile__avatar">
              <img src={user} alt="User's name" />
            </div>
            <div className="profile__contact-data">
              <h3 className="profile__full-name">Michael Richards</h3>
              <p className="profile__email">michaelrichards@gmail.com</p>
            </div>
          </div>
          <div className="profile__stats">
            <div className="profile__data-row profile__data-row--double">
              <div>
                <h3 className="profile__data-title">Date of Birth</h3>
                <p className="profile__data-content">Thursday, 12th April, 1987</p>
              </div>
              <div>
                <h3 className="profile__data-title">Gender</h3>
                <p className="profile__data-content">Male</p>
              </div>
            </div>
            <div className="profile__data-row profile__data-row--double">
              <div>
                <h3 className="profile__data-title">All Entries Till Date</h3>
                <p className="profile__data-content">15</p>
              </div>
            </div>
            <div className="profile__data-row profile__data-row--single">
              <div>
                <h3 className="profile__data-title">About Me</h3>
                <p className="profile__data-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem.
                </p>
              </div>
            </div>
            <div className="profile__controls">
              <OutlineButton type="button">
                <span className="mr-3">Update Account</span> <i className="fas fa-edit" />
              </OutlineButton>
              <OutlineButton
                onClick={this.showDeleteModal}
                type="button"
                className="outline-button--danger"
              >
                <span className="mr-3">Delete Account</span> <i className="fas fa-trash-alt" />
              </OutlineButton>
            </div>
          </div>
        </div>
        <Modal
          show={showDeleteModal}
          handleClose={this.hideDeleteModal}
          type="password"
          name="password"
          id="deleteAccount"
          placeholder="Your Password"
          modalTitle="Delete Account?"
          instruction="Enter your password to delete your account."
          value={deletePassword}
          actionButtonText="Delete"
          actionButtonMethod={this.deleteSubmit}
          onChange={this.deleteOnChange}
          processing={false}
        />
      </Fragment>
    );
  }
}
