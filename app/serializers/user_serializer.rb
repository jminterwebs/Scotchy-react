class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :distillers, :comments
  has_many :whiskeys
  has_many :distillers
  has_many :comments




end
