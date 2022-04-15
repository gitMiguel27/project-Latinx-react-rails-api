class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :country_of_origin, :nationality, :age, :life_mission
  has_one :country
end
