import axios from "axios";



export const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID mU_x2mx8YuWouhYwI1mzOXxIIBIwMhwu6r9FWjqxxnM'
        },
        params: {
            query: term
        }
    });
    console.log(response);

    return response.data.results;
}


