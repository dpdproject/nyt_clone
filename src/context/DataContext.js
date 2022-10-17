import { createContext, useState, useEffect } from "react";

import ClientAPI from "../components/ClientAPI";

// create the context
const DataContext = createContext();

// create the provider
const DataContextProvider = ({children}) => {

    // take fetched data from ClientAPI Component 
    const data = ClientAPI();

    // create a State for the final data
    const [news, setNews] = useState()

    useEffect(() => {
        
        if(data !== undefined) {
    
            function formatData(data) {
            
                let tempData = data.filter(item => item.multimedia !== null);

                let newTempData = tempData.map(item => {
                    let images = item.multimedia[2]
                    let newData = {...item, images};
                    return newData
                });
                return newTempData
            };

            const newData = formatData(data);
            
            let world = newData.filter(result => result.section === "World");
            let us = newData.filter(result => result.section === "U.S.");
            let books = newData.filter(result => result.section === "Books");
            let ny = newData.filter(result => result.section === "New York");
            let business = newData.filter(result => result.section === "Business");
            let opinion = newData.filter(result => result.section === "Opinion");
            let podcast = data.filter(result => result.section === "Podcasts");
            let tech = newData.filter(result => result.section === "Technology");
            let arts = newData.filter(result => result.section === "Arts");
            let style = newData.filter(result => result.section === "Style");
            let sports = newData.filter(result => result.section === "Sports");
            let food = newData.filter(result => result.section === "Food");
            let realestate = newData.filter(result => result.section === "Real Estate");
            
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
                tech,
                arts,
                style,
                sports,
                food,
                realestate
            }));
        }

    }, [data])

    return (
        <DataContext.Provider value={news}>
            {children} 
        </DataContext.Provider>
    )
};

// create the consumer
const DataContextConsumer = DataContext.Consumer;

export { DataContext, DataContextProvider, DataContextConsumer }