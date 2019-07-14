import axios, { AxiosResponse } from 'axios';
import { SignupDTO } from '../interfaces';
import { environments, authenticationEndpoints } from '../constants';

export class AuthService {
  public static url =
    process.env.NODE_ENV === 'production'
      ? `${environments.production.server}`
      : `${environments.development.server}`;

  public static signupUser = async (user: SignupDTO) => {
    try {
      const response: AxiosResponse<any> = await axios({
        url: `${AuthService.url}/${authenticationEndpoints.SIGNUP}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: JSON.stringify(user),
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };
}
