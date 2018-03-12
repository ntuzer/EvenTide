class Event < ApplicationRecord
  validates :organizer_id, :title, :location,  :description,
    :category_id, :min_price, :start_date, :end_date, presence: true

  has_many :tickets,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Ticket

  belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: :User

  has_many :rsvps,
    through: :tickets,
    source: :rsvps
end
