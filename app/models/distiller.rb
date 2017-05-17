class Distiller < ApplicationRecord
  has_many :whiskeys
  belongs_to :region



  def country_name
    self.region.country
  end

  def sub_region
    self.region.sub_region
  end

end
