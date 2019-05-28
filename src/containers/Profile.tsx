import React, { Component, Fragment } from 'react';

import { OutlineButton, Modal, ProfileEditor, ProfileViewer } from '../components';
import user from '../assets/img/user.png';

interface Props {}

interface State {
  showDeleteModal: boolean;
  deletePassword: string;
  editMode: boolean;
}

export class Profile extends Component<Props, State> {
  state: State = {
    editMode: false,
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

  showEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  hideEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    const { editMode, showDeleteModal, deletePassword } = this.state;

    return (
      <Fragment>
        {!editMode ? (
          <ProfileViewer
            updateAccountHandler={this.showEditMode}
            avatar={user}
            fullName="Michael Richards"
            email="michaelrichards@gmail.com"
            entriesCount={15}
            deleteAccountHandler={this.showDeleteModal}
            bio={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reiciendis magni, eum atque a ab officiis laboriosam recusandae repellat alias totam quae animi quas! Laboriosam, perspiciatis sapiente unde modi aliquid eius omnis excepturi nemo totam optio officiis accusantium velit eaque ea cum sint veritatis corporis. Iure voluptatibus inventore rerum quasi`}
          />
        ) : (
          <ProfileEditor
            cancelUpdateHandler={this.hideEditMode}
            avatar={user}
            email="michaelrichards@gmail.com"
            entriesCount={14}
          />
        )}
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
