import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        // Authorization: 'Client-ID fjLMnhXUNQswFbhsVQpCN9dpG2v6s4nqJADG8GlyJMA'
         Authorization: 'Client-ID nytfBQVxKjSEY70J3DPC3AzMvrkmMTPAG7ERv12rE2s'
        //Authorization: `Client-ID 6627d1c7511a03b332b1fa77cbf009f8072f94427c64c34ec0f6436d3ad4cde5`
    }
});