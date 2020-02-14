class DosesController < ApplicationController
  def new
    @ingredients = Ingredient.all
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose = Dose.new
    @dose.cocktail_id = @cocktail.id
  end

  def create
    @dose = Dose.new(params_dose)
    @dose.save!
  end

  private

  def params_dose
    params.require(:dose).permit(:cocktail_id, :ingredient_id, :description)
  end
end
