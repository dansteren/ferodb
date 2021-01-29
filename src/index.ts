import FeroDB from './fero'

interface MenuItem {
  name: string
  category: string
  description: string
  quantity: number
  price: number
}

const database = new FeroDB({
  menuItems:
    'https://docs.google.com/spreadsheets/d/1-Dbd5GbM-5GE9PPe5oRCJi4-Iz0TPySYeYxa57dG38k/edit?usp=sharing',
})

console.log(`${database.menuItems.count} entries`)
