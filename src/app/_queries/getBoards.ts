import axios from "axios";

export async function getBoards(token: string) {
  const headers = {
    'accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  return axios.get('https://api.management.parse25proje.link/api/boards', { headers }).
    then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    })
};