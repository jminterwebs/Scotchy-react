class WhiskeysController < ApplicationController



  def index
    @whiskey = Whiskey.all
  end


  def show
    @whiskey = Whiskey.find(params[:id])
  end

  def new
    @whskey = Whiskey.new
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
    @whiskey = Whiskey.find(params[:id])
  end

  def update
    @whiskey = Whiskey.find(params[:id])
    @whiskey.update(whiskey_params)

    if @song.save
      redirect_to @song
    else
      render :edit
    end
  end


  def destroy
    @whiskey = Whiskey.find(params[:id])
    @whiskey.destroy
    redirect_to whiskey_path
  end

  private

    def whiskey_params
      params.require(:whiskey).permit(:name, :proof, :distiller, :region)
    end

end
