class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      render :show
    else
      render json: ['Event not found!'], status: 404
    end
  end

  def index
    @events = Event.all
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    if @event && current_user.id == @event.organizer_id
      @event.delete
      render :show
    else
      render json: ["Unauthorized"], status: 404
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :location, :description,
      :event_image_url, :category_id, :min_price, :max_price, :start_date, :end_date)
  end

end
