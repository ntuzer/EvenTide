class Api::BookmarksController < ApplicationController
  before_action :require_logged_in

  def create
    id = params[:event_id].to_i
    @bookmark = Bookmark.new(event_id: id)
    @bookmark.user_id = current_user.id
    if @bookmark.save
      @event = Event.find_by(id: @bookmark.event_id)
      render 'api/events/show'
      # render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def show
    @bookmark = Bookmark.find_by(id: params[:id])
  end

  def index
    @bookmarks = Bookmark.all.where(user_id: current_user.id)
    arr = [];
    @bookmarks.each { |bk| arr.push(bk.event_id) }
    @events = Event.find(arr)
    render :index
  end

  def destroy
    id = params[:id].to_i
    @bookmark = Bookmark.find_by(event_id: id)
    if @bookmark
      @bookmark.delete
      @event = Event.find_by(id: @bookmark.event_id)
      render 'api/events/show'
    else
      render json: ["Unauthorized"], status: 403
    end
  end
end
