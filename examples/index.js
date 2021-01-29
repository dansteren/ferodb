import Fero from 'ferodb'

const database = await Fero({
  id: 'your-spreadsheets-unique-id-here',
  tables: ['table1', 'table2', 'table3'],
})

console.log(`Table1 contains ${database.table1.length} items`)
console.log(`Table2 contains ${database.table2.length} items`)
console.log(`Table3 contains ${database.table3.length} items`)
