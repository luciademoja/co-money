class AddPurchases < ActiveRecord::Migration[5.0]
  def change
    create_table :purchases do |t|
      t.integer :account_id
      t.string :name
      t.decimal :amount
      t.boolean :combined

      t.timestamps
    end
  end
end
