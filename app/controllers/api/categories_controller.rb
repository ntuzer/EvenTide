class Api::CategoriesController < ApplicationController
  def show
    @events = Event.all.where(category_id: params[:id].to_i)
  end
end
