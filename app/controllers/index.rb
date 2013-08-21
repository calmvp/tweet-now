get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/tweet' do
  if request.xhr?
    @tweet = CLIENT.update(params[:body])
    p @tweet
  	erb :_tweet_success, layout: false
  else
    erb :index
  end
end
