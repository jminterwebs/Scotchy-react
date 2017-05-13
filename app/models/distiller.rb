class Distiller < ApplicationRecord
  has_many :whiskeys
  belongs_to :region

end
