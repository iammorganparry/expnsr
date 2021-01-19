import { createContext, FC, useState } from 'react'
import { User } from '@supabase/supabase-js'

type AuthorizedUserContextType = [User | null, React.Dispatch<React.SetStateAction<User>>]

const initState: User | null  = null

export const AuthorizedUserContext = createContext([initState, () => {}] as AuthorizedUserContextType)

export const AuthorizedUserProvider: FC = ({ children }) => {
    const state = useState<User | null>(initState)
    return (
        <AuthorizedUserContext.Provider value={state}>
            {children}
        </AuthorizedUserContext.Provider>
    )
}