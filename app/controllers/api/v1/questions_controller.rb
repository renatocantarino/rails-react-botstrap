class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @questions = Question.all
    render json: @questions , status: :ok
  end

  def update_counter
    @questions = Question.find(params[:id])
    if params[:count_for] == 'like'
      @questions.update(likes_counter:questions.likes_counter + 1 )
    elsif params[:count_for] == 'dislike'
      @questions.update(dislikes_counter:questions.dislikes_counter + 1 )
    end

    render json: @questions , status: :ok
  end
end
