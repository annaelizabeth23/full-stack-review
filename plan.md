#Plan

##Important Notes
*Dotenv needs to be included in git ignore
*restart server when you change environment variables

*Front-End
    * ~~Routing- Browser Router~~
    * Components
        * ~~Login- route to Auth 0~~
        * ~~Environment variables- dotenv~~
        * Logout button
    * Account
        * Axios to fetch user info
        * User Info/Account with picture
     * Redux
        *Ducks
        *Reducer
        *Action Creators
        *Reducer
        *Action Names
*Back-End
    *Database
        *User table
            *id - serial
            *name
            *auth0_sub
            *email
            *picture
        *Massive functions/queries
            *Find user by auth 0 id
            *Add new user
            *Init
    *API Endpoints
        *get user data
            *ensure user is logged in with middleware
        *auth login - callback
        logout and kill session
    *Package dot JSON- need to add proxy and main and make sure it has auth callback
    *Packages
        *dotenv
        *axios
        *redux
        *massive
        *express
        *express session
        *body-parser
        *react-redux
        *react-router-dom
        *environment variables
            *connection string
            *session secret
            *