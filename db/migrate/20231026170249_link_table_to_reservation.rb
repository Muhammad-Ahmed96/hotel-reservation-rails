class LinkTableToReservation < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations_tables do |t|
      t.references :reservation
      t.references :table
    end    
  end
end
