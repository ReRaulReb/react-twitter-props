import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

import LeftSide from './components/LeftSide.jsx'
import RightSide from './components/RightSide.jsx'
import Middle from './components/Middle.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')
    const [searchFilter, setSearchFilter] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    const tweetsSearchFiltered = tweets.filter((t) => t.content.toLowerCase().includes(searchFilter.toLowerCase()));
    const tweetsFinished = tweetsSearchFiltered.length > 0 ? tweetsSearchFiltered : tweets;

    return (
        <div className="container">
            
            <LeftSide user = {loggedInUser}/>

            <Middle addTweet={addTweet}
            loggedInUser={loggedInUser} 
            createTweetContent={createTweetContent}
            setCreateTweetContent={setCreateTweetContent}
            tweets={tweetsFinished}/>

            <RightSide user = {loggedInUser} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>

        </div>
    )
}

export default App
