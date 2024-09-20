import React from 'react'
import FacebookLogin from 'react-facebook-login'

const LoginFacebook = () => {
    const responseFacebook = (response) => {
        console.log(response);
      }
    return (
        <div>
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
        </div>
    )
}

export default LoginFacebook