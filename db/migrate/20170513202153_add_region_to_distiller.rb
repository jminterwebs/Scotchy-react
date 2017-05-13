class AddRegionToDistiller < ActiveRecord::Migration[5.0]
  def change
    add_column :distillers, :region_id, :integer
  end
end
