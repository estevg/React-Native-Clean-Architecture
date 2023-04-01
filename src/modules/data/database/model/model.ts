import {Database, Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

export default class BankModelDB extends Model {
  static table = 'bank';

  @field('age') age!: string | null;
  @field('description') description!: string | null;
  @field('url') url!: string | null;
  @field('bankName') bankName!: string | null;
}

export interface BankModel extends Model {
  description: string;
  age: string;
  url: string;
  bankName: string;
}

export interface MethodsProtocol {
  saveBank: (data: Bank) => void;
  getAllBanks: () => Promise<BankModel[]>;
}

export interface InitDatabaseProtocol {
  adapter: () => SQLiteAdapter;
  database: () => Database;
}
