class AddProjectIdToVideos < ActiveRecord::Migration
  def self.up
    add_column :videos, :project_id, :integer
  end

  def self.down
    remove_column :videos, :project_id
  end
end
