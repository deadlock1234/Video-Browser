import axios from 'axios'

const KEY='AIzaSyCH9E7Z0IfjPjFyEiW8p8eE0Q4NY0gGUJg'
           

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});