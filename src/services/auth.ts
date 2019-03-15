import { get } from './http';


export class AuthService {
  login(data: any) {
    return get('test.json')
      .then((response: any) => {
        if (response.email !== data.email) {
          throw Error('Invalid indentity');
        }
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

}
