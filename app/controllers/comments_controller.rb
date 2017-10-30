class CommentsController < ApplicationController
  before_action :set_comment!, except: [:create, :new, :index]

  def index

    if params[:whiskey_id]
      @comments = Whiskey.find(params[:whiskey_id]).comments
      respond_to do |f|
        f.json {render json: @comments}
        f.html {render :index}
      end
    end

  end


  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    render json: @comment, status: 201

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
