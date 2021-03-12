import React from 'react'
import {TextField} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import {signInWithGoogle} from "../../firebase/firebase.config"

const AuthForm = () => {
    return (
        <div>
            <form>
                <TextField variant="outlined" label="Email" fullWidth />
                <TextField variant="outlined" label="Password" fullWidth />
            </form>
            <Button onClick={signInWithGoogle}>
                Sign In With Google
            </Button>
        </div>
    )
}

export default AuthForm
