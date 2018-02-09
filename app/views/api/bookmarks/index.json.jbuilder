# @bookmarks.each do |bk|
#   json.set! bk.id do
#     json.partial! "api/bookmarks/bookmark", bookmark: bk
#   end
# end


@events.each do |evt|
  json.set! evt.id do
    json.extract! evt, :id, :organizer_id, :title, :location, :description, :event_image_url, :category_id, :min_price, :max_price, :start_date, :end_date
  end
end
