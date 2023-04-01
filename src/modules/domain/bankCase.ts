import {Service} from '../data/network/service';
import {Methods} from '../data/database/methods';

export class GetBankCase {
  private local: Methods;
  private network: Service;

  constructor() {
    this.local = new Methods();
    this.network = new Service();
  }

  async getBanksCase() {
    const banksFromDatabase = await this.local.getAllBanks();
    if (!banksFromDatabase.length) {
      const banksFromApi = await this.network.getBanks();
      banksFromApi.forEach(async item => await this.local.saveBank(item));
    } else {
      console.log('Ya existe información');
    }
  }
}
