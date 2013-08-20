get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/tweet' do
  CLIENT.update(params[:body])
  erb :index
end
