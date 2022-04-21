class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :nationality, :age, :life_mission
  has_one :country
end
