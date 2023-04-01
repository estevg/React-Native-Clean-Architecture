import schema from './schema';
import migrations from './migrations';
import BankModelDB, {InitDatabaseProtocol} from './model/model';
import {AppSchema, Database, SchemaMigrations} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

export class InitDatabase implements InitDatabaseProtocol {
  private scheme: AppSchema;
  private migrations: SchemaMigrations;

  constructor() {
    this.scheme = schema;
    this.migrations = migrations;
  }

  adapter() {
    return new SQLiteAdapter({
      schema: this.scheme,
      migrations: this.migrations,
      onSetUpError: error => {
        console.log('File: db.js', error);
      },
    });
  }

  database() {
    return new Database({
      adapter: this.adapter(),
      modelClasses: [BankModelDB],
    });
  }
}

export const db = new InitDatabase().database();
