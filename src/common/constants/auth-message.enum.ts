export enum AuthMessage {
  LOGGED_IN = 'Logged in OK. Hi 👋',
  LOGIN_FAILED = 'Failed to login',
  LOGGED_OUT = 'Logged out OK. Bye 🙋‍♂️',
  REFRESH_TOKEN_NOT_FOUND = 'Refresh token not found',
  TOKEN_NOT_FOUND = 'Token not found',
  REFRESHED_TOKEN_OK = 'Refreshed token OK. Welcome back 🙋‍♀️',
  SIGNATURE_INVALID = "User's signature verification failed",
  ADDRESS_BANNED = 'Address banned',
  INVALID_PHONE = 'Invalid phone number',
  CHECK_USE_PHONE = 'Phone number already in use',
  CHECK_USE_EMAIL = 'Email already in use',
  NOT_FOUND = 'User not found',
  INVALID_PASSWORD = 'Invalid password',
  SEND_SMS = 'Code sent successfully',
  VERIFY_SMS = 'Code verified successfully',
  REGISTER_USER = 'User registered successfully',
  UPDATE_USER = 'User information updated successfully',
  ERR_500 = 'System error',
  UPDATE_FIRST_ERR = 'Unable to update information',
  NOT_ACCESS = 'No access rights',
  DELETE_SUCCESS = 'Deleted successfully',
  NOT_MATCH = 'Password and confirm password do not match',
  UPDATE_PASSWORD = 'Password updated successfully',
}
