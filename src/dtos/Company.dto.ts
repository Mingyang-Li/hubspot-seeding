type CompanyType =
  | 'Prospect'
  | 'Partner'
  | 'Reseller'
  | 'Vendor'
  | 'Other';

type City =
  | 'Auckland'
  | 'Wellington'
  | 'Palmerston North'
  | 'Christchurch'
  | 'Invercargill'
  | 'Dunedin'
  | 'Stanford'
  | 'New Plymouth'
  | 'Hastings'
  | 'Gisbourne'
  | 'Tauranga'
  | 'Taupo'
  | 'Queenstown'
  | 'Arrowtown'
  | 'Cromwell'
  | 'Kaihoura';

export interface Company {
  companyName: string;
  industry?: string;
  city?: City;
  type?: CompanyType;
}
