import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 3,
  tables: [
    tableSchema({
      name: 'bank',
      columns: [
        {name: 'age', type: 'string'},
        {name: 'url', type: 'string'},
        {name: 'bankName', type: 'string'},
        {name: 'description', type: 'string'},
      ],
    }),
  ],
});
