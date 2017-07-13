class CommentsController < ApplicationController
  before_action :set_comment!, except: [:create, :new, :index]

  def index
    @comments = Comment.all
  end


  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save

      redirect_to current_user
    else
      render :new
    end
  end

  def show

  end

  def set_comment!
    @comment = Comment.find(params[:id])
  end

  private
    def comment_params
        params.permit(:whiskey_id, :user_id, :content)
    end

end
