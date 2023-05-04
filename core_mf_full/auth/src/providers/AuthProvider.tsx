import React, {createContext} from 'react'
import { useAuth } from '../hooks/useAuth'

// @ts-ignore
export const AuthContext = createContext<UseAuthHook>();

export const AuthProvider = ({ children }) => {
    const value = useAuth()
    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}

export const useLoginContext = () => {
    return React.useContext(AuthContext)
}