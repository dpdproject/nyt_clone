import { createContext, useState, useEffect } from "react";
import axios from "axios";

// create the context
const ApiContext = createContext();

// create the provider
const ApiContextProvider = ({children}) => {

    const [news, setNews] = useState()

    useEffect(() => {
        let url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=500&api-key=${process.env.REACT_APP_API_KEY}`;

        axios.get(url)
        .then(res => { 
            
            let data = res.data.results;

            function formatData(data) {

                let tempData = data.filter(item => item.multimedia !== null);

                let newTempData = tempData.map(item => {
                    let images = item.multimedia;
                    let image = images.map(image => image.url)

                    let newData = {...item, image};
                    return newData
                });
                return newTempData
            }

            let newData = formatData(data)

            let world = newData.filter(result => result.section === "World");
            let us = newData.filter(result => result.section === "U.S.");
            let books = newData.filter(result => result.section === "Books");
            let ny = newData.filter(result => result.section === "New York");
            let business = newData.filter(result => result.section === "Business");
            let opinion = newData.filter(result => result.section === "Opinion");
            let podcast = data.filter(result => result.section === "Podcasts");
            let science = newData.filter(result => result.section === "Science");
            let arts = newData.filter(result => result.section === "Arts");
            let style = newData.filter(result => result.section === "Style");

            setNews(prevState => ({
                ...prevState,
                data,
                world,
                us,
                books,
                ny,
                business,
                opinion,
                podcast,
                science,
                arts,
                style
            }));
        });
    }, [])

    return (
        <ApiContext.Provider value={news}>
            {children} 
        </ApiContext.Provider>
    )
};

// create the consumer
const ApiContextConsumer = ApiContext.Consumer;

export { ApiContext, ApiContextProvider, ApiContextConsumer }