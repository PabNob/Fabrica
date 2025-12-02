import { Request, Response } from "express";
import { UpdateConfigService } from "../../services/config/UpdateConfigService";

class UpdateConfigController{
    async handle(req: Request, res: Response){

        const configUuid = String(req.params.id);

        const {parametro, valor} = req.body;

        

        const updateConfigService = new UpdateConfigService();

        const config = await updateConfigService.execute({
            configUuid,
            parametro,
            valor
        })

        return res.json(config)
    }
}

export { UpdateConfigController }