import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://bejeweled-f33ee-default-rtdb.firebaseio.com/'
    }
)

export default instance