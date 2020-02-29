class CreateDomains < ActiveRecord::Migration[6.0]
  def change
    create_table :domains do |t|
      t.string :name
      t.string :type
      t.string :ip_address
      t.text :description
      t.integer :parent_id, index: true
      t.integer :company_id, index: true

      t.timestamps
    end
  end
end
