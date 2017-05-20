class Distiller < ApplicationRecord
  has_many :whiskeys
  belongs_to :region

  

  def country_name
    self.region.country
  end

  def sub_region
    self.region.sub_region
  end

  def region_attributes=(country, sub_region)
    self.region = Region.find_or_create_by(country: region.country, sub_region: region.sub_region)
    self.region.update(region)
  end

end
