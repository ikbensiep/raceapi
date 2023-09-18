import { Team } from '../types';
import { NotFound } from '@curveball/http-errors';

export function findAll(): Team[] {
  return [
    {
      id: 0,
      name: 'Privateer',
      budget: 10000,
      level: 0,
      car: 0,
    },
    {
      id: 1,
      name: 'LFO Racing',
      budget: 100000,
      level: 1,
      car: 1
    }
  ];
}

export function findById(id: number): Team {
  const team = findAll().find(team => team.id === id);

  if (!team) {
    throw new NotFound(`Team with id ${id} not found`);
  }

  return team;
}
