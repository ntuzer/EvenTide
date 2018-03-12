class Rsvp < ApplicationRecord
  validates :ticket_id, :user_id, :quantity, presence: true

  belongs_to :ticket,
    primary_key: :id,
    foreign_key: :ticket_id,
    class_name: :Ticket

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_one :event,
    through: :ticket,
    source: :event
end
