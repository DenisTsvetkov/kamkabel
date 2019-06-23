const fetch = require("node-fetch");

class BotService {

  constructor(){
    this._apiBase = 'http://localhost:8081';
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

  async sendMessageToUser(chatId, text){
    return await this.postResource(`/users/send-message`, { chatId, text })
  }

//   async createAvatar(UserId, avatar){
//     return await this.postResource(`/users/avatar/create`, { UserId, avatar })
//   }
  
}


module.exports = BotService;