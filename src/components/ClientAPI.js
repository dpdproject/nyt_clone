import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClientAPI() {

    let url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=500&api-key=${process.env.REACT_APP_API_KEY}`;

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(url)
         .then((response) => setData(response.data.results))
    }, [url]);

    return data
    
}