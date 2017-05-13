class Whiskey < ApplicationRecord
  has_many :user_whiskeys
  has_many :users, through: :user_whiskeys
  belongs_to :distiller


  def distiller_name(name)
    self.distiller = Distiller.find_or_create_by(name: name)
  end

  def distiller_name
    self.distiller.name if self.distiller
  end

end
