import {WebService} from '@appBank/modules/core/WebService';
import {ServiceModel} from './model';

export class Service implements ServiceModel {
  private webService: WebService;

  constructor() {
    this.webService = new WebService();
  }

  async getBanks() {
    return await this.webService.get<Bank[]>('challenge/banks');
  }
}
