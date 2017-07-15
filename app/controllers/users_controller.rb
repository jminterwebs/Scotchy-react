class UsersController < ApplicationController

  def index

  end

  def show

    @user = User.find(params[:id])
    respond_to do |f|
      f.json {render json: @user}
      f.html {render :show}
    end

  end

end
