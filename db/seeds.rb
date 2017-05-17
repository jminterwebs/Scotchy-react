# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  distiller_random = Random.new
  region_random = Random.new


50.times do
  Whiskey.create!(
    name: Faker::Pokemon.name,
    proof: Faker::Number.between(80,100),

  )
end

20.times do
  Distiller.create!(name: Faker::GameOfThrones.house)
end
10.times do
  Region.create!(
    country: Faker::GameOfThrones.city,
    sub_region: Faker::LordOfTheRings.location
  )
end

Whiskey.all.each do |item|
  item.distiller_id = distiller_random.rand(1..20)
  item.save
end

Distiller.all.each do |item|
  item.region_id = region_random.rand(1..10)
  item.save
end

puts "Created #{Whiskey.count}"
