import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { AgendamentoDTO } from '../dto/AgendamentoDTO';
import { mockAgendas } from '../../agenda/mocks/mockAgendas';

export const postAgendamento: APIGatewayProxyHandler = async (
  event
): Promise<APIGatewayProxyResult> => {
  try {
    const agendamento: AgendamentoDTO = JSON.parse(event.body || '{}');

    const medico = mockAgendas.find((m) => m.id === agendamento.medico_id);

    if (!medico) {
      return {
        statusCode: 404,
        body: JSON.stringify({ mensagem: 'Médico não encontrado' }),
      };
    }

    // Successful response
    return {
      statusCode: 201,
      body: JSON.stringify({
        mensagem: 'Agendamento realizado com sucesso',
        agendamento: {
          medico: medico.nome,
          paciente: agendamento.paciente_nome,
          data_horario: agendamento.data_horario,
        },
      }),
    };
  } catch (error) {
    console.error('Error creating appointment:', error);

    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ mensagem: 'Internal Server Error' }),
    };
  }
};
