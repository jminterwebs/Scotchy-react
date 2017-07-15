class WhiskeySerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :distiller
  has_many :comments
  has_many :users

end
