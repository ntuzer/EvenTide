class Event < ApplicationRecord
  validates :organizer_id, :title, :location,  :description,
    :category_id, :min_price, :start_date, :end_date, presence: true


# assocations todo
end
