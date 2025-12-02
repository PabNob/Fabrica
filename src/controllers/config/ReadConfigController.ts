import { Request, Response } from "express";
import { ReadConfigService } from "../../services/config/ReadConfigService";

class ReadConfigController{
    async handle(req: Request, res: Response){
        const readConfigService = new ReadConfigService();

        const config = await readConfigService.execute();

        return res.json(config);
    }
}

export { ReadConfigController }