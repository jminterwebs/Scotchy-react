class CreateWhiskeys < ActiveRecord::Migration[5.0]
  def change
    create_table :whiskeys do |t|

      t.timestamps
    end
  end
end
