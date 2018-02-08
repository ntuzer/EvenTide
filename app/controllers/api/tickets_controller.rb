class Api::TicketsController < ApplicationController

  def show
    @ticket = Ticket.find_by(id: params[:id])
    if @event
      render :show
    else
      render json: ['Ticket not found!'], status: 404
    end
  end

  def create
    @ticket = Ticket.new(ticket_params)
    if @ticket.save
      render :show
    else
      # render json: params[:ticket][:event_id]
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket = Event.find_by(id: params[:id])
    if @ticket && current_user.id == @ticket.organizer_id
      @ticket.delete
      render :show
    else
      render json: ["Unauthorized"], status: 401
    end
  end

  private

  def ticket_params
    params.require(:ticket).permit(:ticket_name, :quantity, :price, :event_id)
  end
end
