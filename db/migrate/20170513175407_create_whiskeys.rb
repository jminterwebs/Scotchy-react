class CreateWhiskeys < ActiveRecord::Migration[5.0]
  def change
    create_table :whiskeys do |t|
      t.string :name
      t.integer :proof
      t.integer :distiller_id

      t.timestamps
    end
  end
end
