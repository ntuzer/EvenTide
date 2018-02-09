class Api::BookmarksController < ApplicationController
  before_action :require_logged_in

  def create
    @bookmark = Book.new(params[:event_id])
    @bookmark.user_id = current_user.id
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end
  
  def show
    @bookmark = Bookmark.find_by(id: params[:id])
  end

  def index
    @bookmarks = Bookmark.all.where(user_id: current_user.id)
  end

  def destroy
  end
end
