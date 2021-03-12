import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"

const useStyles = makeStyles({
    loginButton: {
      background: 'white',
      border: 0,
      borderRadius: 3,
      color: 'red',
      height: 50,
      fontSize: "20px",
      padding: '0 20px',
      '&:hover': {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: '#FFF'
      },
    },
    create: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      border: 0,
      borderRadius: 3,
      height: 50,
      fontSize: "20px",
      padding: '0 20px',
      borderRadius: "50px",
      '&:hover': {
        background: "white",
        color: 'red',
        boxShadow: "0 3px 5px 2px rgba(0,0,0, .3)",
      },
    },
  });

const handleClick = () =>{
    console.log("clicked")
}


const AuthButton = ({type}) => {
  console.log(type)
    const classes=useStyles()
    if(type == "login"){
    return (
        <div>
          <Link to = "/auth" style={{textDecoration: "none"}}>
            <Button className={classes.loginButton} onClick = {handleClick}>
                LOGIN
            </Button>
          </Link>
        </div>
    )
    }
    return(
      <div>
        <Link to = "/auth" style={{textDecoration: "none"}}>
          <Button className = {classes.create}>
            CREATE AN ACCOUNT
          </Button>
        </Link>
      </div>
    )
}

export default AuthButton
