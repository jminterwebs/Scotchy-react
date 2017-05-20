class Whiskey < ApplicationRecord
  has_many :user_whiskeys
  has_many :users, through: :user_whiskeys
  belongs_to :distiller


  


  def distiller_name
    self.distiller.name
  end

  def country
    self.distiller.region.country
  end

  def sub_region
    self.distiller.region.sub_region
  end

  def distiller_attributes=(distiller)
      self.distiller = Distiller.find_or_create_by(name: distiller.name)
      self.distiller.update(distiller)
  end


end
