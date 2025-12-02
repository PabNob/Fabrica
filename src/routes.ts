import { Router } from "express";

import { ReadConfigController } from "./controllers/config/ReadConfigController";
import { CreateConfigController } from "./controllers/config/CreateConfigController";
import { UpdateConfigController } from "./controllers/config/UpdateConfigController";
import { DeleteConfigController } from "./controllers/config/DeleteConfigController";

import { ReadAdController } from "./controllers/anuncio/ReadAdController";
import { CreateAdController } from "./controllers/anuncio/CreateAdController";
import { UpdateAdController } from "./controllers/anuncio/UpdateAdController";
import { DeleteAdController } from "./controllers/anuncio/DeleteAdController";

import { ReadSetorController } from "./controllers/setor/ReadSetorController";
import { CreateSetorController } from "./controllers/setor/CreateSetorController";
import { UpdateSetorController } from "./controllers/setor/UpdateSetorController";
import { DeleteSetorController } from "./controllers/setor/DeleteSetorController";

import { ReadAtendenteController } from "./controllers/atendente/ReadAtendenteController";
import { CreateAtendenteController } from "./controllers/atendente/CreateAtendenteController";
import { UpdateAtendenteController } from "./controllers/atendente/UpdateAtendenteController";
import { DeleteAtendenteController } from "./controllers/atendente/DeleteAtendenteController";

import { ReadPacienteController } from "./controllers/paciente/ReadPacienteController";
import { CreatePacienteController } from "./controllers/paciente/CreatePacienteController";
import { UpdatePacienteController } from "./controllers/paciente/UpdatePacienteController";
import { DeletePacienteController } from "./controllers/paciente/DeletePacienteController";
import { CreateAtendimentoController } from "./controllers/atendimento/CreateAtendimentoController";
import { ReadAtendimentoController } from "./controllers/atendimento/ReadAtendimentoController";
import { UpdateAtendimentoController } from "./controllers/atendimento/UpdateAtendimentoController";

// import { ListQueueController } from "./controllers/setorFila/ListQueueController";
// import { NextQueueController } from "./controllers/setorFila/NextQueueController";


const router = Router();

    // Configuracao 
    router.get('/api/config', new ReadConfigController().handle)

    router.post('/api/config', new CreateConfigController().handle)

    router.put('/api/config/:id', new UpdateConfigController().handle)

    router.delete('/api/config/:id', new DeleteConfigController().handle)

    // Anuncio
    router.get('/api/ad', new ReadAdController().handle)

    router.post('/api/ad', new CreateAdController().handle)

    router.put('/api/ad/:id', new UpdateAdController().handle)

    router.delete('/api/ad/:id', new DeleteAdController().handle)
    
    // Atendente
    router.get('/api/atendente', new ReadAtendenteController().handle)
    
    router.post('/api/atendente', new CreateAtendenteController().handle)
    
    router.put('/api/atendente/:atendenteUuid', new UpdateAtendenteController().handle)
    
    router.delete('/api/atendente/:atendenteUuid', new DeleteAtendenteController().handle)
    
    // Paciente
    router.get('/api/paciente', new ReadPacienteController().handle)
    
    router.post('/api/paciente', new CreatePacienteController().handle)
    
    router.put('/api/paciente/:pacienteUuid', new UpdatePacienteController().handle)
    
    router.delete('/api/paciente/:pacienteUuid', new DeletePacienteController().handle)
    
    // Setor
    router.get('/api/setor', new ReadSetorController().handle)

    router.post('/api/setor', new CreateSetorController().handle)

    router.put('/api/setor/:id', new UpdateSetorController().handle)

    router.delete('/api/setor/:id', new DeleteSetorController().handle)
    
    // Atendimento
    router.get('/api/setor/:setorUuid/atendimento', new ReadAtendimentoController().handle)

    router.post('/api/setor/:setorUuid/atendimento', new CreateAtendimentoController().handle)

    router.put('/api/setor/:setorUuid/atendimento/:atendimentoUuid', new UpdateAtendimentoController().handle)

export { router };