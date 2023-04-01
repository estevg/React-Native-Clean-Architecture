import {db} from './init';
import {Database} from '@nozbe/watermelondb';
import {BankModel, MethodsProtocol} from './model/model';

export class Methods implements MethodsProtocol {
  private database: Database;

  constructor() {
    this.database = db;
  }

  async saveBank(data: Bank) {
    await this.database.write(async () => {
      this.database.get<BankModel>('bank').create((bank: BankModel) => {
        bank.description = data.description;
        bank.age = data.age.toString();
        bank.url = data.url;
        bank.bankName = data.bankName;
      });
    });
  }

  async getAllBanks() {
    return await this.database.get<BankModel>('bank').query().fetch();
  }
}
