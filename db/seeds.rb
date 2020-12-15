# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

items = ["bread", "cheese", "milk", "toothbroush"]

3.times do
  d = Department.create(
    name: Faker::Company.industry,
  )
  5.times do
    d.items.create(
      name: items.sample,
      price: 10,
    )
  end
end

puts "seeded with 3 departments - 5 items each"
