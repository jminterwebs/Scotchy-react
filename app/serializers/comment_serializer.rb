class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :whiskey_id, :user_id
  belongs_to :user
  belongs_to :whiskey


  def user_id
    user_id = current_user.id
  end





end
