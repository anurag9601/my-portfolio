import { createContext , useState } from "react";

export const ContextAPI = createContext();

const StorageOfContext = (props) =>{
    let [sidebarActive , setSidebarActive] = useState(false);

    return(
        <ContextAPI.Provider value={{sidebarActive , setSidebarActive}}>
            {props.children}
        </ContextAPI.Provider>
    )
}

export default StorageOfContext;