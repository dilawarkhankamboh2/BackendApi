import { NextFunction, Request, Response } from "express";
import { ControllerType } from "../types/controllerType";

const tryCatch = (func:ControllerType)=> (req:Request, res:Response, next:NextFunction)=>{


    return Promise.resolve(func(req, res, next)).catch(next)
    
}

export {tryCatch};