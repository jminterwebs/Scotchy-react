class Region < ApplicationRecord
  has_many :distillers

  validates :country, presence: true
  validates :sub_region, presence: true
end
