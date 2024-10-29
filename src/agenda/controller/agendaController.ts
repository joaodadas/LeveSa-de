import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { mockAgendas } from '../mocks/mockAgendas';

export const getAgendas: APIGatewayProxyHandler =
  async (): Promise<APIGatewayProxyResult> => {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({ medicos: mockAgendas }),
      };
    } catch (error) {
      console.error('Error fetching agendas:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ mensagem: 'Internal Server Error' }),
      };
    }
  };
