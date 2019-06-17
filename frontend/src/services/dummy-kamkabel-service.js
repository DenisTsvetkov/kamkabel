export default class KamkabelApiService {

    _users = [
      {
        id: 1,
        name: 'Denis',
        surname: 'Tsvetkov1',
        username: 'cvetkoff',
        phone: '79125998779'
      },
      {
        id: 2,
        name: 'Denis',
        surname: 'Tsvetkov2',
        username: 'cvetkoff',
        phone: '79125998779'
      },
      {
        id: 3,
        name: 'Denis',
        surname: 'Tsvetkov3',
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

    sendMessage = async (userTo, msg) => {
      return `Получатель письма ${userTo}. Текст сообщения ${msg}`;
    }

    getServerDataExist = () => {
      return true;
    }

    createUser = async (user) => {
      return `Пришли данные юзера `+user;
    }

    createBot = async (bot) => {
      return `Пришли данные по боту `+bot;
    }
  
  }