import React, { FunctionComponent, MouseEventHandler } from 'react';
import { OutlineButton } from './';

interface Props {
  avatar: string;
  fullName: string;
  email: string;
  entriesCount: number;
  dateOfBirth?: string;
  gender?: 'male' | 'female';
  bio?: string;
  deleteAccountHandler: MouseEventHandler<any>;
  updateAccountHandler: MouseEventHandler<any>;
}

export const ProfileViewer: FunctionComponent<Props> = ({
  avatar,
  fullName,
  email,
  entriesCount,
  dateOfBirth,
  gender,
  bio,
  updateAccountHandler,
  deleteAccountHandler,
}) => {
  return (
    <div className="profile-viewer">
      <div className="profile-viewer__bio">
        <div className="profile-viewer__avatar">
          <img src={avatar} alt="User's name" />
        </div>
        <div className="profile-viewer__contact-data">
          <h3 className="profile-viewer__full-name">{fullName}</h3>
          <p className="profile-viewer__email">{email}</p>
        </div>
      </div>
      <div className="profile-viewer__stats">
        <div className="profile-viewer__data-row profile-viewer__data-row--double">
          <div>
            <h3 className="profile-viewer__data-title">Date of Birth</h3>
            <p className="profile-viewer__data-content">{dateOfBirth ? dateOfBirth : '...'}</p>
          </div>
          <div>
            <h3 className="profile-viewer__data-title">Gender</h3>
            <p className="profile-viewer__data-content">{gender ? gender : '...'}</p>
          </div>
        </div>
        <div className="profile-viewer__data-row profile-viewer__data-row--double">
          <div>
            <h3 className="profile-viewer__data-title">All Entries Till Date</h3>
            <p className="profile-viewer__data-content">{entriesCount}</p>
          </div>
        </div>
        <div className="profile-viewer__data-row profile-viewer__data-row--single">
          <div>
            <h3 className="profile-viewer__data-title">About Me</h3>
            <p className="profile-viewer__data-content">{bio}</p>
          </div>
        </div>
        <div className="profile-viewer__controls">
          <OutlineButton onClick={updateAccountHandler} type="button">
            <span className="mr-3">Update</span> <i className="fas fa-edit" />
          </OutlineButton>
          <OutlineButton
            onClick={deleteAccountHandler}
            type="button"
            className="outline-button--danger"
          >
            <span className="mr-3">Delete</span> <i className="fas fa-trash-alt" />
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};
