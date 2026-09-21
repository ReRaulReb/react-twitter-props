import CreateTweet from "./CreateTweet"
import Tweets from "./Tweets"

export default function Middle({addTweet, loggedInUser, 
	createTweetContent, setCreateTweetContent, tweets}){
	return(
	<main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <CreateTweet addTweet={addTweet}
		loggedInUser={loggedInUser}
		createTweetContent={createTweetContent}
		setCreateTweetContent={setCreateTweetContent}/>

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                <Tweets tweets={tweets}/>
            </main>
	)

}
