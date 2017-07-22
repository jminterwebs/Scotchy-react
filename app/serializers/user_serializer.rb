class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :distillers
  has_many :whiskeys





end
