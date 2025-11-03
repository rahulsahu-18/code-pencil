import  express,{ Request, Response }  from "express"
import { saveCode } from "../controller/compilerController";

const compileRouter = express.Router();

compileRouter.post('/saveCode',saveCode);

export default compileRouter;