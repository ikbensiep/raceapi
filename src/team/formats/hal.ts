import { Team } from  '../../types';

export function collection(teams: Team[]) {
  return {
    _links: {
      self: {
        href: '/team',
      },
      item: teams.map(team => ({
        href: team.href,
        title: team.name,
      })),
    },
    total: teams.length,
    _embedded : {
      item: teams.map( team => item(team) )
    }
  };
}

export function item(team: Team) {
  return {
    _links: {
      self: {
        href: team.href,
      },
      collection: {
        title: 'List of teams',
        href: '/team',
      }
    },
    name: team.name,
    level: team.level,
    car: team.car,
  };
}
