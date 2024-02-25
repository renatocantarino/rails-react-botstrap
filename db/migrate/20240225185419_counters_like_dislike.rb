class CountersLikeDislike < ActiveRecord::Migration[7.1]
  def change
    add_column :questions , :likes_counter , :integer , default:0
    add_column :questions , :dislikes_counter , :integer, default:0
  end
end
