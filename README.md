# EvenTide
EvenTide is a clone of EventBrite. It is a web app created from the ground up using React, Redux, with a Rails backend.

[EvenTide live](https://eventide-app.herokuapp.com/)

![](https://github.com/ntuzer/EvenTide/blob/master/wireframes/screenshots/home.png?raw=true)

# Features

## Frontend
Eventide is built using React and Redux, key features include:

### User Auth
EvenTide allows users to register an account and sign in.

![](https://github.com/ntuzer/EvenTide/blob/master/wireframes/screenshots/userauth.png?raw=true)

### Create Event
It also allows users to create events and either paid or free tickets or donations.

![](https://github.com/ntuzer/EvenTide/blob/master/wireframes/screenshots/eventcreate.png?raw=true)

### Registration
User can then register for or purchase tickets for an event.

![](https://github.com/ntuzer/EvenTide/blob/master/wireframes/screenshots/eventregister.png?raw=true)

### Bookmarks & User Profile
Users also have the ability to bookmark events they would like to register for, and a dashboard to see those bookmarked events.

![](https://github.com/ntuzer/EvenTide/blob/master/wireframes/screenshots/userprofile.png?raw=true)


## Backend

EvenTide’s backend is built on Ruby on Rails and a POSTGRESQL database. It is built using MVC architecture. The front end makes an Ajax call to the controllers that in turn call the models that hit the database. That data is then passed to the views that are sent back to the frontend.


```class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end
…
```

## Future Implementations

* Search
* Google Maps Integration
* Multiple tickets
