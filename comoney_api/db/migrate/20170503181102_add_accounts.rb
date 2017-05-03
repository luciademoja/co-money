class AddAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :name
    end
  end
end
