const axios = require('axios');

const API_KEY = 'AIzaSyCYAOf47ROug-Y_-y-_XXGTn7dpscMiZ3w';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

async function searchBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}?q=${title}&key=${API_KEY}`);
        return response.data.items;
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        return [];
    }
}

searchBooksByTitle('Harry Potter')
    .then(books => {
        console.log('Livros encontrados:', books);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
