class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :location, :nationality, :birth, :death, :biography, :life, :mission
  has_one :country
end
