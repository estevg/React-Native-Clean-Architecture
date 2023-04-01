export interface ServiceModel {
  getBanks: () => Promise<Bank[]>;
}
