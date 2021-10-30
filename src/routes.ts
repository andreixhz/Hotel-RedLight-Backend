import { Router } from 'express'
import { getOcupacoes, getOcupacao, saveOcupacao, updateOcupacao, deleteOcupacao } from './controller/OcupacaoController'
import { getFuncionarios, getFuncionario, saveFuncionario, updateFuncionario, deleteFuncionario } from './controller/FuncionarioController'
import { deleteComodidade, getComodidade, getComodidades, saveComodidade, updateComodidade } from './controller/ComodidadeController';
import { deleteHospede, getHospede, getHospedes, saveHospede, updateHospede } from './controller/HospedeController1';

const routes = Router()


routes.get('/api/ocupacao', getOcupacoes);
routes.get('/api/ocupacao/:id', getOcupacao);
routes.post('/api/ocupacao', saveOcupacao);
routes.put('/api/ocupacao/:id', updateOcupacao)
routes.delete('/api/ocupacao/:id', deleteOcupacao)

routes.get('/api/funcionario', getFuncionarios);
routes.get('/api/funcionario/:id', getFuncionario);
routes.post('/api/funcionario', saveFuncionario);
routes.put('/api/funcionario/:id', updateFuncionario)
routes.delete('/api/funcionario/:id', deleteFuncionario)

routes.get('/api/comodidade', getComodidades);
routes.get('/api/comodidade/:id', getComodidade);
routes.post('/api/comodidade', saveComodidade);
routes.put('/api/comodidade/:id', updateComodidade)
routes.delete('/api/comodidade/:id', deleteComodidade)

routes.get('/api/hospede', getHospedes);
routes.get('/api/hospede/:id', getHospede);
routes.post('/api/hospede', saveHospede);
routes.put('/api/hospede/:id', updateHospede)
routes.delete('/api/hospede/:id', deleteHospede)





export default routes
