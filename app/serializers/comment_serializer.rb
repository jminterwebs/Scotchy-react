class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :whiskey_id, :user_id
  belongs_to :user
  belongs_to :whiskey

end
