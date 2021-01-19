import supabase from '@expnsr/services/Supabase'

export const GoogleBtn = () => {

    const success = async (event: React.SyntheticEvent) => {
        event.persist()
        supabase.auth.signIn({
            provider: 'google',

          })
        .then(({ user, error}) => alert(user.email))
    }


    return(
<button onClick={success}>
    sign in with google
</button>
)
}