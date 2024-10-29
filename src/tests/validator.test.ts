import { validateAgendamento } from '../utils/validator';

test('Should validate a valid appointment payload', () => {
  const payload = {
    medico_id: 1,
    paciente_nome: 'Carlos',
    data_horario: '2024-10-05 09:00',
  };
  expect(validateAgendamento(payload)).toBe(true);
});
