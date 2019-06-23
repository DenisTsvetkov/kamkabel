const fetch = require("node-fetch");

class KamkabelService {

  constructor(){
    this._apiBase = 'http://localhost:8080';
  }


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


  // getAllUsers = async () => {
  //   //return await this.getResource(`/users/`);
  //   const result = await this.getResource(`/users/`);
  //   return result.result.users
  // }

  async createUser(chatId, username){
    return await this.postResource(`/users/create`, { chatId, username })
  }

  async createAvatar(UserId, avatar){
    return await this.postResource(`/users/avatar/create`, { UserId, avatar })
  }
  
  async createUserProfile(UserId, first_name, last_name){
    return await this.postResource(`/users/profile/create`, { UserId, name: first_name, surname: last_name });
  }
}


module.exports = KamkabelService;