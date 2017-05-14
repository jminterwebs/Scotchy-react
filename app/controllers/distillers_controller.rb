class DistillersController < ApplicationController
  before_action :set_distiller!, except: [:create, :index, :new]


  def index
    @distillers = distiller.all
  end

  def show
  end

  def edit
  end

  def new
    @distiller = distiller.new
  end

  def create
    @distiller = distiller.new

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
    @distiller = distiller.find(params[:id])
  end

  def distiller_params
    params.require(:distiller).permit(:name)
  end




end
