import { Router } from 'express'
import { getOcupacoes, getOcupacao, saveOcupacao, updateOcupacao, deleteOcupacao } from './controller/OcupacaoController'
import { getFuncionarios, getFuncionario, saveFuncionario, updateFuncionario, deleteFuncionario } from './controller/FuncionarioController'
import { deleteComodidade, getComodidade, getComodidades, saveComodidade, updateComodidade } from './controller/ComodidadeController';
import { deleteHospede, getHospede, getHospedes, saveHospede, updateHospede } from './controller/HospedeController';
import { deleteServico, getOneServico, getServicos, saveServico, updateServico } from './controller/ServicoController'
import { deleteNotaFiscal, getNotaFiscais, getNotaFiscal, saveNotaFiscal } from "./controller/NotaFiscalController"

const routes = Router()


routes.get('/ocupacao', getOcupacoes);
routes.get('/ocupacao/:id', getOcupacao);
routes.post('/ocupacao', saveOcupacao);
routes.put('/ocupacao/:id', updateOcupacao)
routes.delete('/ocupacao/:id', deleteOcupacao)

routes.get('/funcionario', getFuncionarios);
routes.get('/funcionario/:id', getFuncionario);
routes.post('/funcionario', saveFuncionario);
routes.put('/funcionario/:id', updateFuncionario)
routes.delete('/funcionario/:id', deleteFuncionario)

routes.get('/comodidade', getComodidades);
routes.get('/comodidade/:id', getComodidade);
routes.post('/comodidade', saveComodidade);
routes.put('/comodidade/:id', updateComodidade)
routes.delete('/comodidade/:id', deleteComodidade)

routes.get('/hospede', getHospedes);
routes.get('/hospede/:id', getHospede);
routes.post('/hospede', saveHospede);
routes.put('/hospede/:id', updateHospede)
routes.delete('/hospede/:id', deleteHospede)

routes.get('/servico', getServicos);
routes.get('/servico/:id', getOneServico);
routes.post('/servico', saveServico);
routes.put('/servico/:id', updateServico)
routes.delete('/servico/:id', deleteServico)

routes.get('/notaFiscal', getNotaFiscais);
routes.get('/notaFiscal/:id', getNotaFiscal);
routes.post('/notaFiscal', saveNotaFiscal);
routes.delete('/notaFiscal/:id', deleteNotaFiscal)





export default routes
