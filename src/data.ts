export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 50000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Salary',
      amount: 20000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 15000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid4',
      source: 'Airtime',
      amount: 5000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid5',
      source: 'Projects',
      amount: 150000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid6',
      source: 'Idea',
      amount: 150000000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

export interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

data.report.push({
  id: 'uuid',
  source: 'Salary',
  amount: 7500,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
});
