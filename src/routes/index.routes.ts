import { authRoutes } from "./authRoutes/auth.routes";

const allRoutes = (app: any) => {
    
  // auth routes
  authRoutes(app);
};

export {allRoutes};