# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

default = User.find_or_create_by(email: 'finnfrancis123@gmail.com', first_name: 'Finn', last_name: 'Francis')

Company.find_or_create_by(name: 'PHARMASEAL', user_id: default.id)

unilever = Company.find_or_create_by(name: 'UNILEVER', user_id: default.id)
Company.find_or_create_by(name: 'Axe/Lynx', user_id: default.id, parent_id: unilever.id)
