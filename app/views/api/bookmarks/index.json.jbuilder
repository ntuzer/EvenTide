@bookmarks.each do |bk|
  json.set! bk.id do
    json.partial! "api/bookmarks/bookmark", bookmark: bk
  end
end
