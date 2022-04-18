# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_18_155317) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "hometown"
    t.string "nationality"
    t.integer "birth"
    t.integer "death"
    t.string "biography"
    t.string "life_mission"
    t.bigint "country_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["country_id"], name: "index_artists_on_country_id"
  end

  create_table "artworks", force: :cascade do |t|
    t.string "title"
    t.string "image"
    t.string "category"
    t.integer "date"
    t.string "current_lcation"
    t.bigint "country_id", null: false
    t.bigint "artist_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_artworks_on_artist_id"
    t.index ["country_id"], name: "index_artworks_on_country_id"
    t.index ["user_id"], name: "index_artworks_on_user_id"
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "country_of_origin"
    t.string "nationality"
    t.integer "age"
    t.string "life_mission"
    t.bigint "country_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["country_id"], name: "index_users_on_country_id"
  end

  add_foreign_key "artists", "countries"
  add_foreign_key "artworks", "artists"
  add_foreign_key "artworks", "countries"
  add_foreign_key "artworks", "users"
  add_foreign_key "users", "countries"
end
