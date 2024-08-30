Hello, welcome to Eternal AI.

Set .env and \src\googleAuth\googleSettings.ts;

In \src\googleAuth\googleSettings.ts set this {

export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/userinfo.email", 
  "https://www.googleapis.com/auth/userinfo.profile", 
];

export const GOOGLE_AUTH_URI = "https://accounts.google.com/o/oauth2/auth";

export const GOOGLE_TOKEN_URI = "https://accounts.google.com/o/oauth2/token";

export const GOOGLE_USER_INFO_URI = "https://www.googleapis.com/oauth2/v1/userinfo";

export const GOOGLE_CLIENT_ID = "";

export const GOOGLE_CLIENT_SECRET = "";

export const GOOGLE_REDIRECT_URI = "http://localhost:3000/auth/google-callback";

}

Sign-Up {
    For sign-up we can use GOOGLE ACCOUNT send POST request to /auth/google-auth
    or use default method:
        send POST request to "/auth/sign-up" and point "email", "password"
        EXAMPLE - /auth/sign-up , body {email: eternal@ai.com, password: 123456}
}

Login {
    For login we need to do POST request
    to /auth/login and point our "email", "password"
    EXAMPLE - /auth/login , body {email: eternal@ai.com, password: 123456}
}

Check our Profile {
    For look at our Profile we need to do GET request to /profile
}

Change profile details {
    For change your account detail such as phone number, email, password
    you need to send POST request to /change-details and you can point "phone", "email", "password".
    
    BUT if you was logged with GOOGLE ACCOUNT you can change ONLY phone number!
}

Refreshing access token {
    You must be logged and send POST request to /refresh-token
    and after that you will get Access Token to Cookie
}


Available routes - [ /auth/google-auth, /auth/sign-up, /auth/login,
                     /profile, /change-details, /refresh-token ]
