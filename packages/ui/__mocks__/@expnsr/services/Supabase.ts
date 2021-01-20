// const { createClient } = jest.genMockFromModule('@supabase/supabase-js');

const createClient = () => {
    return {
        auth: {
            signIn({ email, password}) {
                return Promise.resolve({ email })
            },
            signUp({ email, password }) {
                return Promise.resolve({ email })
            }
        }
    }
}

const supabase = createClient()
export default supabase