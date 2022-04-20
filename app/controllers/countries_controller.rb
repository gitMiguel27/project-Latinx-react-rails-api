class CountriesController < ApplicationController

    def index
        countries = Country.all
        render json: countries, status: :ok
    end
end
