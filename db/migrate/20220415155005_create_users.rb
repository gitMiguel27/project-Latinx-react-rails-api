class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :country_of_origin
      t.string :nationality
      t.integer :age
      t.string :life_mission
      t.belongs_to :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end
