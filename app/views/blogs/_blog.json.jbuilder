json.extract! blog, :id, :title, :desc, :img, :author, :created_at, :updated_at
json.url blog_url(blog, format: :json)
