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
import { AuthAtendenteController } from "./controllers/login/AuthAtendenteController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

// import { ListQueueController } from "./controllers/setorFila/ListQueueController";
// import { NextQueueController } from "./controllers/setorFila/NextQueueController";


const router = Router();

    // Login
    router.post('/api/login', new AuthAtendenteController().handle)

    // Configuracao 
    router.get('/api/config', new ReadConfigController().handle)

    router.post('/api/config', isAuthenticated, new CreateConfigController().handle)

    router.put('/api/config/:id', isAuthenticated, new UpdateConfigController().handle)

    router.delete('/api/config/:id', isAuthenticated, new DeleteConfigController().handle)

    // Anuncio
    router.get('/api/ad', new ReadAdController().handle)

    router.post('/api/ad', isAuthenticated, new CreateAdController().handle)

    router.put('/api/ad/:id', isAuthenticated, new UpdateAdController().handle)

    router.delete('/api/ad/:id', isAuthenticated, new DeleteAdController().handle)
    
    // Atendente
    router.get('/api/atendente', new ReadAtendenteController().handle)
    
    router.post('/api/atendente', new CreateAtendenteController().handle)
    
    router.put('/api/atendente/:atendenteUuid', isAuthenticated, new UpdateAtendenteController().handle)
    
    router.delete('/api/atendente/:atendenteUuid', isAuthenticated, new DeleteAtendenteController().handle)
    
    // Paciente
    router.get('/api/paciente', new ReadPacienteController().handle)
    
    router.post('/api/paciente', isAuthenticated, new CreatePacienteController().handle)
    
    router.put('/api/paciente/:pacienteUuid', isAuthenticated, new UpdatePacienteController().handle)
    
    router.delete('/api/paciente/:pacienteUuid', isAuthenticated, new DeletePacienteController().handle)
    
    // Setor
    router.get('/api/setor', new ReadSetorController().handle)

    router.post('/api/setor', isAuthenticated, new CreateSetorController().handle)

    router.put('/api/setor/:id', isAuthenticated, new UpdateSetorController().handle)

    router.delete('/api/setor/:id', isAuthenticated, new DeleteSetorController().handle)
    
    // Atendimento
    router.get('/api/setor/:setorUuid/atendimento', new ReadAtendimentoController().handle)

    router.post('/api/setor/:setorUuid/atendimento', isAuthenticated, new CreateAtendimentoController().handle)

    router.put('/api/setor/:setorUuid/atendimento/:atendimentoUuid', isAuthenticated, new UpdateAtendimentoController().handle)

export { router };