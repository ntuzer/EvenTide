class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :organizer_id, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.string :description, null: false
      t.string :event_image_url
      t.integer :category_id, null: false
      t.integer :min_price, null: false
      t.integer :max_price, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false

      t.timestamps
    end

    add_index :events, :organizer_id
    add_index :events, :title
    add_index :events, :location
  end
end
