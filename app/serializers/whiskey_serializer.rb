class WhiskeySerializer < ActiveModel::Serializer
  attributes :id, :name, :user_likes, :comments
  belongs_to :distiller
  has_many :comments
  has_many :users

end
