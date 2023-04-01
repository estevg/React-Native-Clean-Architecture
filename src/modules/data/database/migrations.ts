import {
  createTable,
  schemaMigrations,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    {
      toVersion: 3,
      steps: [
        createTable({
          name: 'bank',
          columns: [
            {name: 'age', type: 'string'},
            {name: 'url', type: 'string'},
            {name: 'bankName', type: 'string'},
            {name: 'description', type: 'string'},
          ],
        }),
      ],
    },
  ],
});
