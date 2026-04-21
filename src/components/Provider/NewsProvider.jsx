import { createContext, useState } from "react";


export const NewsContext = createContext();

const NewsProvider = ({children}) => {

    const [titles, setTitles] = useState([]);

    const newsInfo = {
        titles,
        setTitles
    }

    return (
        <NewsContext.Provider value={newsInfo}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;