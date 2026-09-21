export default function WhoToFollow({imgElon, imgZuck, user}){
	return(
	<div className='widget'>
                    <h1>Who to follow</h1>

                    <div className="follow-block">
                        <div className="icon"><img src={imgElon}/></div>

                        <div className="content">
                            <h4>Elon Musk</h4>
                            <h5>@elonmusk</h5>
                        </div>

                        <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>

                    <div className="follow-block">
                        <div className="icon"><img src={imgZuck}/></div>

                        <div className="content">
                            <h4>Mark Zuckerberg</h4>
                            <h5>@markzuckerberg</h5>
                        </div>

                        <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>

                    <div className="follow-block">
                        <div className="icon"><img src={user.profileImage}/></div>

                        <div className="content">
                            <h4>{user.name}</h4>
                            <h5>{user.handle}</h5>
                        </div>

                        <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
	)
}
