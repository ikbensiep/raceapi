import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import * as hal from '../formats/hal';
import * as teamService from '../service';

class TeamCollection extends Controller {
  async get(ctx: Context) {
    ctx.response.type = 'application/hal+json',
    ctx.response.body = hal.collection(
      await teamService.findAll()
    );

  }

  async post(ctx: Context) {
    const body = ctx.request.body as any;
    const team = await teamService.create({
      name: body.name,
      car: body.car,
      level: body.level,
      competition: body.competition
    });

    ctx.status = 201;
    ctx.response.headers.set('Location', team.href);
  }
}

export default new TeamCollection();
