import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{
    const [isSidebar,setSidebar]=useState(false);


    const handleSidebar = ()=>{
        setSidebar(prev=>!prev);
    }

    return <AppContext.Provider value={{isSidebar,handleSidebar}}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}

export default AppProvider;