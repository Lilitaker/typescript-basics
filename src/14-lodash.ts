//Using the Lodash library - it doesn't types support TS
//Lodash doesn't use import, but require
//var _ = require('lodash');

import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'zulema',
    role: 'seller',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
];

//Agrupar por un parámetro específico
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

/*
{
  admin: [
    { username: 'nico', role: 'admin' },
  ],
  seller: [
    { username: 'valentina', role: 'seller' },
    { username: 'zulema', role: 'seller' },
  ],
  customer: [
    { username: 'santiago', role: 'customer' },
  ]
}
*/
