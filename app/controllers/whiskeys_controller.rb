class WhiskeysController < ApplicationController
  before_action :set_whiskey!, except: [:create, :index, :new]




  def index

    @whiskeys = Whiskey.all

  end


  def show

  end

  def new
    @whiskey = Whiskey.new

  end

  def create
    @whiskey = Whiskey.new(whiskey_params)

    if @whiskey.save
      redirect_to @whiskey
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

  private

    def set_whiskey!
      @whiskey = Whiskey.find(params[:id])
    end

    def whiskey_params
      params.require(:whiskey).permit(:name, :proof, distiller_attributes: [:name, region_attributes: [:country, :sub_region]])
    end

end
