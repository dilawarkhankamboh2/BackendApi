import { tryCatch } from "../../middlewares/tryCatch.middleware";

// register user
const register = tryCatch(async(req, res, next)=>{


    return res.json({message: "Register is working"})


});

// login user
const login= tryCatch(async(req, res, next)=>{


    return res.json({message: "Login is working"})
})


// export all functions
export {register};