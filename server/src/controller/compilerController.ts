import { Request, Response } from "express";

const saveCode = (req: Request, res: Response) => {
    res.send("save request come");
};

export { saveCode };
