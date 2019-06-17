export default class KamkabelApiService {

    _users = [
      {
        id: 1,
        name: 'Denis',
        surname: 'Tsvetkov',
        username: 'cvetkoff',
        phone: '79125998779'
      },
      {
        id: 1,
        name: 'Denis',
        surname: 'Tsvetkov',
        username: 'cvetkoff',
        phone: '79125998779'
      },
      {
        id: 1,
        name: 'Denis',
        surname: 'Tsvetkov',
        username: 'cvetkoff',
        phone: '79125998779'
      }
      
    ];

    getAllUsers = async () => {
      return this._users;
    }
  
    getUser = async (id) => {
      return await this.getResource(`/users/${id}`);
    }
  
  }