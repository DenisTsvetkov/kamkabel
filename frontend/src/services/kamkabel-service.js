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
  
  
    getAllUsers = async () => {
      return await this.getResource(`/users/`);
    }
  
    getUser = async (id) => {
      return await this.getResource(`/users/${id}`);
    }

    sendMessageToUser = async (userId, message) => {
      return await this.postResource(`/users/:${userId}/send-message`, { message })
    }
  
  }