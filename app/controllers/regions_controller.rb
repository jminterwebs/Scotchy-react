class RegionsController < ApplicationController
  before_action :set_region!, except: [:create, :index, :new]


  def index
    @regions = Region.all
  end

  def show
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
    params.require(:region).permit(:country, :sub_region)
  end

end
