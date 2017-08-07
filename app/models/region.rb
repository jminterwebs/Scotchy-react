class Region < ApplicationRecord
  has_many :distillers
  validates :country, presence: true
end
