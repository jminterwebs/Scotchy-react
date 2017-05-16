class Distiller < ApplicationRecord
  has_many :whiskeys
  belongs_to :region



  def country_name
    self.distiller.region.country
  end


end
