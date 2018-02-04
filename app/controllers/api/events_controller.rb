class Api::EventsController < ApplicationController
  def create
    @Event = Event.new(event_params)

  end

  def show

  end

  def index

  end

  def destroy

  end

  private

  def event_params
    params.require(:event).permit()
  end

end
