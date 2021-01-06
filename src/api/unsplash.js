import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fjLMnhXUNQswFbhsVQpCN9dpG2v6s4nqJADG8GlyJMA'
    }
});