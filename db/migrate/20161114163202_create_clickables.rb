class CreateClickables < ActiveRecord::Migration
  def change
    create_table :clickables do |t|
      t.string :target_image_id
      t.string :top
      t.string :left
      t.string :width
      t.string :height

      t.timestamps null: false
    end
  end
end
