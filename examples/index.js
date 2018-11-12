import Fero from 'ferodb'

const database = await Fero({
  tableName: 'https://docs.google.com/spreadsheets/d/your-spreadsheets-unique-id-here/edit?usp=sharing',
})

console.log(`Database contains ${database.tableName.length} items`)
