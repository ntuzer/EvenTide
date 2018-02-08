class Ticket < ApplicationRecord
  validates :ticket_name, :quantity, :price, presence: true
validates :quantity, :price, numericality: true

has_many :rsvps,
  primary_key: :id,
  foreign_key: :ticket_id,
  class_name: :Rsvp

has_many :rsvped_users,
  through: :rsvps,
  source: :user

belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: :Event
end
