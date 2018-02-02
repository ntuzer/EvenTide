# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.new(email: "test", password: "password")
User.new(email: "rewel", password: "password")
User.new(email: "dahveed", password: "password")
User.new(email: "joe@schmo.com", password: "password")
User.new(email: "DemoUser@EvenTide.com", password: "password")
