class Blog < ApplicationRecord
    mount_uploader :img, ImageUploader
end
