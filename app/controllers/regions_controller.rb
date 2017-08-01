class RegionsController < ApplicationController
  before_action :set_region!, except: [:create, :index, :new]


  def index
    @regions = Region.all
      respond_to do |f|
        f.json {render json: @regions}
        f.html {render :index}
      end
  end

  def show
    @region = Region.find(params[:id])
  end

  def edit
  end

  def new
    @region = Region.new
  end

  def create
    @region = Region.new
    
  end



  def update
    @region.update(region_params)

    if @region.save
      redirect_to @region
    else
      reder :edit
    end
  end

  private

  def set_region!
    @region = Region.find(params[:id])
  end

  def region_params
    params.require(:region).permit(:country)
  end

end
