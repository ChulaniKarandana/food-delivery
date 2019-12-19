import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3000';

class ApiService {

/*
    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
*/

    addFood(food) {
        return axios.post(""+USER_API_BASE_URL, food);
    }

    /*editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }*/

}

export default new ApiService();
