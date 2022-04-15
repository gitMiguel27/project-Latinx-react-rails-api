class Country < ApplicationRecord
    has_many :artworks
    has_many :artisits, through: :artworks
end
