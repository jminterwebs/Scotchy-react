class DistillerSerializer < ActiveModel::Serializer
  attributes :id, :name, :region, :region_name
  belongs_to :region
  has_many :whiskeys

  def region_name
    object.region.country
  end

end
