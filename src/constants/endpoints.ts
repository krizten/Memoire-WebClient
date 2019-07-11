const authenticationEndpoints = {
  SIGNUP: 'auth/signup',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  CHANGE_PASSWORD: 'auth/change-password',
  FORGOT_PASSWORD: 'auth/forgot-password',
  RESET_PASSWORD: 'auth/reset-password',
};

const entriesEndpoints = {
  ENTRIES: 'entries',
  SINGLE_ENTRY: getSingleEntry,
};

const accountEndpoints = {
  ACCOUNT: 'account',
};

const uploadEndpoints = {
  UPLOAD_IMAGE: 'uploads/image',
  UPLOAD_AVATAR: 'uploads/avatar',
};

function getSingleEntry(id: string): string {
  return `entries/${id}`;
}

export { authenticationEndpoints, entriesEndpoints, accountEndpoints, uploadEndpoints };
