class Api::RsvpsController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :destroy]

  def create

    @rsvp = Rsvp.new(rsvp_params)
    @rsvp.user_id = current_user.id
    ticket = Ticket.find_by(event_id: params[:rsvp][:event_id])
    @rsvp.ticket_id = ticket.id
    a = params[:rsvp][:quantity].to_i
    if ticket && ticket.quantity > a && @rsvp.save
      update = ticket.quantity - a
      ticket.update_attributes({quantity: update})
      render :show
    end
  end

  def index
    rsvps = Rsvp.all.where(user_id: current_user.id)
    @hsh = {}
    rsvps.each {|r| @hsh[r] = r.event}
  end

  def destroy

  end

  private

  def rsvp_params
    params.require(:rsvp).permit(:quantity)
  end
end
