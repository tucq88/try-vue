import { get } from './http';


export class AuthService {
  public login(data: any) {
    return get('test.json')
      .then( (response) => {
        if (response.email !== data.email) {
          throw Error('Invalid indentity');
        }
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      });
  }

  public logout() {
    localStorage.removeItem('user');
  }

}
