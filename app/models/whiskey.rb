class Whiskey < ApplicationRecord
  has_many :user_whiskeys
  has_many :users, through: :user_whiskeys
  belongs_to :distiller


  
end
