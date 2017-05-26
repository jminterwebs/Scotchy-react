class StaticController < ApplicationController
  before_action :authenticate_user!, except:[:index]


  def index
    if user_signed_in?
      redirect_to current_user
    end
  end

end
