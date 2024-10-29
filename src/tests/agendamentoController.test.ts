import { postAgendamento } from '../agendamento/controller/agendamentoController';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { mockContext } from './testUtils';

const validEvent: Partial<APIGatewayProxyEvent> = {
  body: JSON.stringify({
    medico_id: 1,
    paciente_nome: 'Carlos Almeida',
    data_horario: '2024-10-05 09:00',
  }),
  httpMethod: 'POST',
  path: '/agendamento',
};

const invalidEvent: Partial<APIGatewayProxyEvent> = {
  body: JSON.stringify({
    medico_id: 99,
    paciente_nome: 'Carlos Almeida',
    data_horario: '2024-10-05 09:00',
  }),
  httpMethod: 'POST',
  path: '/agendamento',
};

test('Should successfully create an appointment', async () => {
  const response = await postAgendamento(
    validEvent as APIGatewayProxyEvent,
    mockContext,
    () => {}
  );

  if (!response) {
    return;
  }

  expect(response.statusCode).toBe(201);
  const body = JSON.parse(response.body);
  expect(body.mensagem).toBe('Agendamento realizado com sucesso');
  expect(body.agendamento.medico).toBe('Dr. João Silva');
  expect(body.agendamento.paciente).toBe('Carlos Almeida');
});

test('Should return 404 when doctor is not found', async () => {
  const response = await postAgendamento(
    invalidEvent as APIGatewayProxyEvent,
    mockContext,
    () => {}
  );

  if (!response) {
    return;
  }

  expect(response.statusCode).toBe(404);
  const body = JSON.parse(response.body);
  expect(body.mensagem).toBe('Médico não encontrado');
});
