import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 2tYYF1ggmpGjEUBjgM5ABCIO0JlZ_WRekxkE0oe9tlw'
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;