# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Account.create name: 'Luke'
Account.create name: 'Maria'


Purchase.create account_id: Account.first.id, amount: 789, name: '7 Eleven, Kaffe', combined: true
Purchase.create account_id: Account.second.id, amount: 14, name: 'Pressbyrån, Semla', combined: true
