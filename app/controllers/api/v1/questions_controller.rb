class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    if params[:tags].present? && params[:tags] != "All"
      @questions = Question.where(tag: params[:tags])
    else
      @questions = Question.all
    end

    render json: @questions , status: :ok
  end

  def update_counter
    @question = Question.find(params[:id])
    if params[:count_for] == 'like'
      puts 'like'
      @question.update(likes_counter: @question.likes_counter + 1 )
    elsif params[:count_for] == 'dislike'
      @question.update(dislikes_counter: @question.dislikes_counter + 1 )
    end

    render json: @questions , status: :ok
  end
end
