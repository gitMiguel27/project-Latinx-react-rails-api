class Artworks < ActiveRecord::Migration[6.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :image
      t.string :category
      t.integer :date
      t.string :current_lcation
      t.belongs_to :country, null: false, foreign_key: true
      t.belongs_to :artist, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
