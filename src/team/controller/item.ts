import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import * as hal from '../formats/hal';
import * as teamService from '../service';

class TeamItem extends Controller {
  async get(ctx: Context) {

    ctx.response.type = 'application/hal+json',
    ctx.response.body = hal.item(
      await teamService.findById(
        +ctx.params.teamId,
      )
    );

  }
}

export default new TeamItem();
