class TodosController < ApplicationController

  # GET /
  def home

  end

  # GET /todos
  def index
    render json: Todo.all
  end

  # GET /todos/:id.json
  def show
    render json: Todo.find(params[:id])
  end
end
