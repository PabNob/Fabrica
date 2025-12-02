import { Request, Response } from "express";
import { CreateConfigService } from "../../services/config/CreateConfigService";

class CreateConfigController {
    async handle(req: Request, res: Response){
        const {parametro, valor} = req.body;

        const createConfigService = new CreateConfigService();

        const config = await createConfigService.execute({
            parametro,
            valor
        })

        return res.json(config)
    }
}

export { CreateConfigController }