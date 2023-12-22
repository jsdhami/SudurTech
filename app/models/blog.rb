class Blog < ApplicationRecord
    mount_uploader :img, ImageUploader
    belongs_to :user
   
end
