import { createContext, useState } from "react";

// create the context
const MenuContext = createContext();

// create the provider
const MenuContextProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <MenuContext.Provider value={{isOpen, handleToggle}}>
            {children} 
        </MenuContext.Provider>
    )
}


export { MenuContext, MenuContextProvider }