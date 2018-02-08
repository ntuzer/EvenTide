class Api::RsvpsController < ApplicationController
  def create
    debugger
    ticket = Ticket.find_by(event_id: params[:rsvp][:event_id])
    if ticket.quantity > params[:rsvp][:quantity] && @rsvp.save
      update = ticket.quantity - params[:rsvp][:quantity]
      ticket.update_attributes({quantity: update})
      render :show
    end
  end

  def show

  end

  def destroy

  end
end
