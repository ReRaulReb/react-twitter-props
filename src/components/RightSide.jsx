import imgElon from './../assets/images/elon.jpg'
import imgZuck from './../assets/images/zuck.jpg'
import WhatsHappening from './WhatsHappening'
import WhoToFollow from './WhoToFollow'
import Search from './Search'

export default function RightSide({user}){
	return(
            <aside className='right-side'>
                <Search/>

                <div className='widget'>
                    <div className="widget-grid">
                        <h1>Get Verified</h1>
                        <h3>Subscribe to unlock nothing.</h3>

                        <button className="verify-btn">Get Verified</button>
                    </div>
                </div>

                <WhatsHappening/>

                <WhoToFollow imgElon={imgElon} imgZuck={imgZuck} user={user}/>
            </aside>
	)

}
