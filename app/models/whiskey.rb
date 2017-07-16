class Whiskey < ApplicationRecord
  has_many :user_whiskeys
  has_many :users, through: :user_whiskeys
  has_many :comments
  belongs_to :distiller, optional: true
  #
  #
  # validates :name, presence: true
  # validates :name, uniqueness: true
  # validates :proof, presence: true

  accepts_nested_attributes_for :distiller


  def distiller_name
    self.distiller.name
  end

  def country
    self.distiller.region.country
  end

  def distiller_attributes=(distiller)
      self.distiller = Distiller.find_or_create_by(name: distiller[:name])
      self.distiller.region_attributes=(distiller[:region_attributes])
      self.distiller.update(distiller)
  end

  def user_likes
    if self.users.count == 1
      "#{self.users.count} user"
    else
      "#{self.users.count} users"
    end
  end


end
