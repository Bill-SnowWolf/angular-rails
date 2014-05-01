class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.integer :complete, default: 0

      t.timestamps
    end
  end
end
