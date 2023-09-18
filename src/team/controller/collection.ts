import Controller from '@curveball/controller';
import { Context } from '@curveball/core';

import * as hal from '../formats/hal';
import * as teamService from '../service';

class TeamCollection extends Controller {
  async get(ctx: Context) {
    console.log('⛑ helb')
    ctx.response.type = 'application/hal+json',
    ctx.response.body = hal.collection(
      await teamService.findAll()
    );

  }

  post() {
    return '';
  }
}

export default new TeamCollection();
