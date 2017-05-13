class CreateUserWhiskeys < ActiveRecord::Migration[5.0]
  def change
    create_table :user_whiskeys do |t|
      t.integer :user_id
      t.integer :whiskey_id
      t.timestamps
    end
  end
end
