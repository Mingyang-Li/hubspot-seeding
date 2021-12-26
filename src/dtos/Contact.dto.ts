export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle?: JobTitle;
  phoneNumber?: string;
  lifeCycleStage?: LifeCycleStage;
  leadStatus?: LeadStatus;
}

enum JobTitle {
  'Director',
  'Builder',
  'Accountant',
  'Manager',
  'Project Manager',
}

enum LeadStatus {
  'New',
  'open',
  'In progress',
  'Open deal',
  'Unqualified',
  'Attempted to contact',
  'Connected',
  'Bad timing',
}

enum LifeCycleStage {
  'Lead',
  'Customer',
  'Opportunity',
}
