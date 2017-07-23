class DistillerSerializer < ActiveModel::Serializer
  attributes :id, :name, :region, :region_name
  belongs_to :region


  def region_name
    object.region.country
  end

end
