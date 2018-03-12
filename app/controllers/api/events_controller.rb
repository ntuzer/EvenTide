class Api::EventsController < ApplicationController
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

  def update
    @event = Event.find_by(id: params[:id])
    if current_user.id = @event.organizer_id
      if @event.update_attribute(event_params)
        render :show
      else
        render json: @event.errors.full_messages, status: 404
      end
    else
      render json: ['Unauthorized'], status: 403
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
      render json: ["Unauthorized"], status: 403
    end
  end

  def myEvents
    @events = Event.find_by(organizer_id: current_user.id)
    begin
      @events.first
    rescue
      @events = [@events]
    end
    @events = [] if @events.nil?
    render :index
  end

  private

  def event_params
    params.require(:event).permit(:title, :location, :description,
      :event_image_url, :category_id, :min_price, :max_price, :start_date, :end_date)
  end

end
