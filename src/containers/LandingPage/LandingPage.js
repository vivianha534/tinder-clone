import React from 'react'
import LandingHeader from "../../components/Headers/LandingHeader"
import "./LandingPage.css"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';
import AuthButton from "../../components/Authentication/AuthButton"

const useStyles = makeStyles({
    slogan: {
        color: "white",
        backgroundColor: "rgba(0,0,0, 0.7)",
        padding: "20px",
        borderRadius: "50px",
        marginBottom: "5vh",
    },
});

const LandingPage = () => {
    const classes = useStyles()
    return (
        <div className="background">
            <LandingHeader/>
            <div className="slogan">
                <Typography variant = "h1" className={classes.slogan} style={{fontWeight: "bold"}}>
                    Swipe Right
                </Typography>
                <AuthButton type="create"/>
            </div>
        </div>
    )
}

export default LandingPage
