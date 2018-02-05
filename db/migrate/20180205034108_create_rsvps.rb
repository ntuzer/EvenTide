class CreateRsvps < ActiveRecord::Migration[5.1]
  def change
    create_table :rsvps do |t|
      t.integer :ticket_id, null: false
      t.integer :user_id, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
    add_index :rsvps, :user_id
  end
end
