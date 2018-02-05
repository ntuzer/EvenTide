class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.string :ticket_type, null: false

      t.timestamps
    end
    add_index :tickets :ticket_type
  end
end
