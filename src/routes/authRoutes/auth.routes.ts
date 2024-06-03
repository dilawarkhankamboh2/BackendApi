import { login, register } from "../../controllers/authController/authController"


const authRoutes= (app:any)=>{


    // register api routes
    app.post("/api/v1/register/user", register);

    // login api routes
    app.post("/api/v1/login/user", login)
}

export {authRoutes};