/* eslint-disable linebreak-style */
import { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema
    .createTable('teams', function(table) {
      table.increments('id');
      table.string('name', 255).notNullable();
      table.string('competition', 255).notNullable();
      table.integer('level', 10).notNullable();
      table.integer('car', 10);
    });
}

export async function down (knex: Knex) {
  await knex.schema.dropTable('teams');
}


