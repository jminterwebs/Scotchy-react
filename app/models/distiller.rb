class Distiller < ApplicationRecord
  has_many :whiskeys
  belongs_to :region

  accepts_nested_attributes_for :region

  def country_name
    self.region.country
  end

  def sub_region
    self.region.sub_region
  end


  def distiller_whiskeys_liked
    self.whiskeys
  end

  def region_attributes=(region)
    self.region = Region.find_or_create_by(country: :country, sub_region: :sub_region)
    self.region.update(region)
  end




end
