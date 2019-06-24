export default class KamkabelApiService {

    _apiBase = 'http://localhost:8080';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      
      return await res.json();
    }


    async postResource(url, data) {
      const res = await fetch(`${this._apiBase}${url}`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
      });
      const body = await res.json();
      return body; 
    }
    
    getServerDataExist = () => {
      return true;
    }
  
    getAllUsers = async () => {
      //return await this.getResource(`/users/`);
      const result = await this.getResource(`/users/`);
      return result.result.users
    }
  
    getUser = async (id) => {
      return await this.getResource(`/users/${id}`);
    }

    sendMessageToUser = async (AdministratorId, messages) => {
      return await this.postResource(`/users/send-message`, { AdministratorId, messages })
    }

    getAllAdministrators = async () => {
      const { result } = await this.getResource('/administrators');
      return result.administrators;
    }

    createAdministrator = async(name, surname, login, password) => {
      try{
        const createdAdmin =  await this.postResource('/administrators/create', { name, surname })
        console.log('Создан админ: ', createdAdmin);
      
        const { id } = createdAdmin.result.administrator;
        return await this.postResource('/administrators/auth-data/create', { AdministratorId: id, login, password })
      }
      catch(error){
        return new Error(error)
      }
    }
  
  }