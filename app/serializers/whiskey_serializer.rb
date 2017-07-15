class WhiskeySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :comments
end
