# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

User.create(email: "test", password: "password")
User.create(email: "rewel", password: "password")
User.create(email: "dahveed", password: "password")
User.create(email: "joe@schmo.com", password: "password")
User.create(email: "DemoUser@EvenTide.com", password: "password")


Event.create({
  organizer_id: 5,
  title: 'Party of the year',
  location: "Atlanta",
  description: "FUN Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party of the millenium',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 1',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 2',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 3',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 4',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 5',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 6',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 7',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 8',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 9',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)

Event.create({
  organizer_id: 5,
  title: 'Party 10',
  location: "SFO",
  description: "Great Times",
  category_id: 1,
  min_price: 0,
  start_date: '2018-03-22T17:00',
  end_date: '2018-03-22T19:00',
  }
)
