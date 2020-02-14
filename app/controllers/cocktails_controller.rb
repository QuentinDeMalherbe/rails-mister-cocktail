class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail.all
    @cocktail = Cocktail.new
  end

  def show
    @cocktail = Cocktail.find(params[:id])
  end

  def new
  end

  def create
    @cocktail = Cocktail.new(name: params["cocktail"]["name"])
    @cocktail.save
    @cocktail_dose = Cocktail.last
    redirect_to new_cocktail_dose_path(@cocktail_dose)
  end
end
