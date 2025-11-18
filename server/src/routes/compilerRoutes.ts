import  express,{ Request, Response }  from "express"
import { deleteCode, loadCode, myCodes, saveCode } from "../controller/compilerController";
import { verifyToken } from "../middleware/verifyToken";

const compileRouter = express.Router();

compileRouter.post('/loadCode',loadCode);
compileRouter.post('/saveCode',verifyToken,saveCode);
compileRouter.delete('/delete/:id',verifyToken,deleteCode)
compileRouter.get('/my-codes',verifyToken,myCodes);

export default compileRouter;