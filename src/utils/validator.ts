import { AgendamentoDTO } from '../agendamento/dto/AgendamentoDTO';

export const validateAgendamento = (agendamento: AgendamentoDTO): boolean => {
  return (
    agendamento.medico_id !== undefined &&
    agendamento.paciente_nome.trim() !== '' &&
    agendamento.data_horario.trim() !== ''
  );
};
