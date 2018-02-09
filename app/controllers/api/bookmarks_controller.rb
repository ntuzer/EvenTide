class Api::BookmarksController < ApplicationController
  before_action :require_logged_in

  def create
    @bookmark = Book.
  end

  def index
    @bookmarks = Bookmark.all.where(user_id: current_user.id)
  end

  def destroy
  end
end
