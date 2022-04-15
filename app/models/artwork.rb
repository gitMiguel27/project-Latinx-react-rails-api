class Artwork < ApplicationRecord
  belongs_to :artist
  belongs_to :country
  belongs_to :user
end
