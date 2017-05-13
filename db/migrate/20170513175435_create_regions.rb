class CreateRegions < ActiveRecord::Migration[5.0]
  def change
    create_table :regions do |t|
      t.string :country
      t.string :sub_region

      t.timestamps
    end
  end
end
