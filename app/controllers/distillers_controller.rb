class DistillersController < ApplicationController
  before_action :set_distiller!, except: [:create, :index, :new]


  def index

    @distillers = Distiller.all

  end

  def show
  end

  def edit
  end

  def new
    @distiller = Distiller.new
    @distiller.build_region
  end

  def create
    @distiller = Distiller.new

  end


  def update
    @distiller.update(distiller_params)

    if @distiller.save
      redirect_to @distiller
    else
      reder :edit
    end
  end

  private

  def set_distiller!
    @distiller = Distiller.find(params[:id])
  end

  def distiller_params
    params.require(:distiller).permit(:name, :region_attributes[:country, :sub_region])
  end




end
