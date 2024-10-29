import { getAgendas } from '../agenda/controller/agendaController';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { mockContext } from './testUtils';

const mockEvent: Partial<APIGatewayProxyEvent> = {
  headers: {},
  httpMethod: 'GET',
  path: '/agendas',
};

test('Should return a list of agendas', async () => {
  const response = await getAgendas(
    mockEvent as APIGatewayProxyEvent,
    mockContext,
    () => {}
  );

  if (!response) {
    return;
  }

  expect(response.statusCode).toBe(200);
  const body = JSON.parse(response.body);
  expect(body.medicos.length).toBeGreaterThan(0);
});
