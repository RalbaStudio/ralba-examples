import { Item } from './item';

export const ITEMS: Item[] = [
  {
    status: "available",
    id: '12345',
    date: '2011-11-11',
    name: 'Honza',
    from: 'honza',
    to: 'Michal',
    amount: 123,
    note: 'test',
  },
  {
    status: "available",
    id: '12344',
    date: '2011-11-11',
    name: 'Michal',
    from: 'honza',
    to: 'Michal',
    amount: 456,
    note: 'co je jako',
  },
  {
    status: "available",
    id: '12343',
    date: '2011-11-11',
    name: 'Jakub',
    from: 'honza',
    to: 'Michal',
    amount: 789,
    note: 'sušenka',
  },
];

