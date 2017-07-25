class DistillersController < ApplicationController
   before_action :set_distiller!, except: [:create, :index, :new]


  def index

    if params[:user_id]
      @distillers = User.find(params[:user_id]).distillers
      respond_to do |f|
        f.json {render json: @distillers}
        f.html {render :index}
      end
    else
      @distillers = Distiller.all
      respond_to do |f|
        f.json {render json: @distillers}
        f.html {render :index}
      end
    end
  end

  def show
    if params[:id]
      @distiller = Distiller.find(params[:id])
      respond_to do |f|
        f.json {render json: @distiller}
        f.html {render :show}
      end
    end
  end

  def edit
  end

  def new
    @distiller = Distiller.new
    @region = @distiller.build_region
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
    params.require(:distiller).permit(:name, :region_attributes[:country])
  end




end
