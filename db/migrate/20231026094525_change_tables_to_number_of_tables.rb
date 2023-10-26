class ChangeTablesToNumberOfTables < ActiveRecord::Migration[7.0]
  def change
    rename_column :reservations, :table, :number_of_tables
  end
end
