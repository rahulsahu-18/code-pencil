import  express,{ Request, Response }  from "express"
import { loadCode, saveCode } from "../controller/compilerController";

const compileRouter = express.Router();

compileRouter.post('/saveCode',saveCode);
compileRouter.post('/loadCode',loadCode);

export default compileRouter;