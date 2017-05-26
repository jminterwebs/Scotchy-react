class Distiller < ApplicationRecord
  has_many :whiskeys
  belongs_to :region, optional: true


  accepts_nested_attributes_for :region

  validates :name, presence: true

  def country_name
    self.region.country
  end
  
  def region_attributes=(region)
    self.region = Region.find_or_create_by(country: region[:country])
  end




end
