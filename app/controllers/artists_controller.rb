class ArtistsController < ApplicationController

    def index
        artists = Artist.all
        render json: artists, status: :ok
    end

end
