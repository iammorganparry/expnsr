import supabase from '@expnsr/services/Supabase'

export const GoogleBtn = () => {

    const success = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        let { user, error } = await supabase.auth.signIn({
            provider: 'google',

          })
        if(error) {
            console.log(error)
        } else {
            alert(`Hello ${user.email}`)
        }
    }


    return(
<button onClick={success}>
    sign in with google
</button>
)
}