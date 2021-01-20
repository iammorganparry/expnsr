import { useContext, useState, useEffect, useRef } from "react"
import supabase from '@expnsr/services/Supabase'
import { AuthorizedUserContext } from './context'
import { useToasts } from 'react-toast-notifications'
// import { useRouter } from 'next/router'

export * from './context'

type AuthTypes = 'login' | 'register'
interface FormState {
    email: string
    password: string
}

export const useAuthorizeUser = (type: AuthTypes) => {
    const [userContext, setUserContext] = useContext(AuthorizedUserContext)
    const { addToast } = useToasts()
    // const router = useRouter()
    const [formState, setFormState] = useState<FormState>({
        email: '',
        password: ''
    })

    const typeCheck = () => type === 'login' ? 'signIn' : 'signUp'
    const successMessage = typeCheck() === 'signIn' ? 'Successfully logged in!' : 'Successfully signed up!'
    const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(ps => ({ ...ps, [key]: event.target.value}))
    }
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        const { user, error } = await supabase.auth[typeCheck()]({
            email: formState.email,
            password: formState.password
          })
        if(user) {
            addToast(successMessage, { appearance: 'success'})
            // router.push('/')
        }
        if(error) {
            addToast(error.message, { appearance: 'error'})
        }
        setUserContext(user)
    }

    // useEffect(() => {
    //     // to debounce the email as it changes
    //     clearTimeout(emailCheck.current)
    //     emailCheck.current = setTimeout(async () => {
    //         const { data } = await supabase.from<User>('users')
    //             .select()
    //             .eq('email', formState.email)
    //         const exists = data.length > 0
    //         // do something with exists
    //     }, 500)
    //     return () => {
    //         clearTimeout(emailCheck.current)
    //     }
    // }, [formState.email])

    return {
        handleChange,
        handleSubmit,
        formState: [formState, setFormState],
        user: userContext
    }
}