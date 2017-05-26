class WhiskeysController < ApplicationController
  before_action :set_whiskey!, except: [:create, :index, :new]




  def index

    if params[:user_id]
      @whiskeys = User.find(params[:user_id]).whiskeys
    else
      @whiskeys = Whiskey.all
    end

  end


  def show

  end

  def new
    @whiskey = Whiskey.new
    @distiller = @whiskey.build_distiller
    @region = @whiskey.distiller.build_region
  end

  def create
    @whiskey = Whiskey.new(whiskey_params)

    if @whiskey.save
      current_user.whiskeys << @whiskey
      redirect_to current_user
    else
      render :new
    end
  end

  def edit

  end

  def update

    @whiskey.update(whiskey_params)

    if @whiskey.save
      redirect_to @whiskey
    else
      render :edit
    end
  end


  def destroy
    @whiskey.destroy
    redirect_to whiskey_path
  end

  def add
      current_user.whiskeys << @whiskey
      redirect_to current_user
  end

  def remove
      current_user.whiskeys.delete(@whiskey)
      current_user.save
      redirect_to current_user
  end


  private

    def set_whiskey!
      @whiskey = Whiskey.find(params[:id])
    end

    def whiskey_params
      params.require(:whiskey).permit(:name, :proof, distiller_attributes: [:name, region_attributes: [:country]])
    end

end
