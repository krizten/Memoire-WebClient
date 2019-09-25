import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

import { Modal, ProfileEditor, ProfileViewer, Header } from '../components';
import { fetchAccount } from '../store/account/actions';
import { AppState, ConnectedReduxProps } from '../store';
import { getAccount } from '../store/account/selectors';
import { Account } from '../interfaces';
import user from '../assets/img/user.png';

interface State {
  showDeleteModal: boolean;
  deletePassword: string;
  editMode: boolean;
}

interface PropsFromState {
  account?: Account;
}

interface PropsFromDispatch {
  fetchAccount: typeof fetchAccount;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<{}> & ConnectedReduxProps;

class Profile extends Component<AllProps, State> {
  state: State = {
    editMode: false,
    showDeleteModal: false,
    deletePassword: '',
  };

  componentDidMount() {
    this.props.fetchAccount();
  }

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
        <div className="profile">
          <Header title="Profile" />
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

const mapStateToProps = ({ account }: AppState) => ({
  account: getAccount(account),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAccount: () => dispatch(fetchAccount()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
