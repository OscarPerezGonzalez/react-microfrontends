import React, {createContext} from 'react'
import { useAtenciones } from '../hooks/useAtenciones'

// @ts-ignore
export const AtencionesContext = createContext<UseAtencionesHook>();

export const AtencionesProvider = ({ children }) => {
    const value = useAtenciones()
    return (
    <AtencionesContext.Provider value={value}>
        {children}
    </AtencionesContext.Provider>
    )
}

export const useAtencionesContext = () => {
    return React.useContext(AtencionesContext)
}