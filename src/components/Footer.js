import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/nyt-logo.png";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='horizontal--line'></div>
        <Link to="/">
            <img src={logo} alt="New York Times" className="footer--logo"/>
        </Link>
        <section className='footer--items'>
            <div className='footer--links'>
                <h2>News</h2>
                <Link to='/section/world/'>world</Link>
                <Link to='/section/coronavirus/'>coronavirus</Link>
                <Link to='/section/usnews/'>U.S.</Link>
                <Link to='/section/world/'>politics</Link>
                <Link to='/section/world/'>new york</Link>
                <Link to='/section/world/'>business</Link>
                <Link to='/section/world/'>tech</Link>
                <Link to='/section/world/'>science</Link>
                <Link to='/section/world/'>climate</Link>
                <Link to='/section/world/'>sport</Link>
                <Link to='/section/world/'>wildfire tracker</Link>
                <Link to='/section/world/'>obituaries</Link>
                <Link to='/section/world/'>the upshot</Link>
                <Link to='/section/world/'>today's paper</Link>
                <Link to='/section/world/'>corrections</Link>
                <Link to='/section/world/'>trending</Link>
            </div>
            <div className='footer--links'>
                <h2>Opinion</h2>
                <Link to='/section/todaysopinion/'>today's opinion</Link>
                <Link to='/section/columnists/'>columnists</Link>
                <Link to='/section/editorials/'>editorials</Link>
                <Link to='/section/guestessays/'>guest essays</Link>
                <Link to='/section/letters/'>letters</Link>
                <Link to='/section/sundayopinion/'>sunday opinion</Link>
                <Link to='/section/opinionvideo/'>opinion video</Link>
            </div>
            <div className='footer--links'>
                <h2>Arts</h2>
                <Link to='/section/todaysarts/'>today's arts</Link>
                <Link to='/section/artanddesign/'>art &amp; design</Link>
                <Link to='/section/book/'>books</Link>
                <Link to='/section/bestsellerbooklist/'>best sellers book list</Link>
                <Link to='/section/dance/'>dance</Link>
                <Link to='/section/movies/'>movies</Link>
                <Link to='/section/music/'>music</Link>
                <Link to='/section/popculture/'>pop culture</Link>
                <Link to='/section/television/'>television</Link>
                <Link to='/section/theater/'>theater</Link>
                <Link to='/section/videoarts/'>video: arts</Link>
            </div>
            <div className='footer--links'>
                <h2>Living</h2>
                <Link to='/section/automotive/'>automotive</Link>
                <Link to='/section/games/'>games</Link>
                <Link to='/section/education/'>education</Link>
                <Link to='/section/Food/'>Food</Link>
                <Link to='/section/health/'>health</Link>
                <Link to='/section/jobs/'>jobs</Link>
                <Link to='/section/love/'>love</Link>
                <Link to='/section/magazine/'>magazine</Link>
                <Link to='/section/parenting/'>parenting</Link>
                <Link to='/section/realestate/'>real estate</Link>
                <Link to='/section/style/'>style</Link>
                <Link to='/section/tmagazine/'>t magazine</Link>
                <Link to='/section/travel/'>travel</Link>
            </div>
            <div className='footer--links'>
                <h2>More</h2>
                <Link to='/section/readercenter/'>reader center</Link>
                <Link to='/section/theathletic/'>the athletic</Link>
                <Link to='/section/wirecutter/'>wirecutter</Link>
                <Link to='/section/cooking/'>cooking</Link>
                <Link to='/section/headway/'>headway</Link>
                <Link to='/section/liveevents/'>live events</Link>
                <Link to='/section/thelearningnetwork/'>the learning network</Link>
                <Link to='/section/toolsandservices/'>tools &amp; services</Link>
                <Link to='/section/podcasts/'>podcasts</Link>
                <Link to='/section/video/'>video</Link>
                <Link to='/section/graphics/'>graphics</Link>
                <Link to='/section/timesmachine/'>timesMachine</Link>
                <Link to='/section/nytstore/'>NYT store</Link>
                <Link to='/section/login/'>manage my account</Link>
                <Link to='/section/nytlicensing/'>NYT licensing</Link>
            </div>
            <div className='footer--sub'>
                <h2>Subscribe</h2>
                <Link to='/section/subscribe_campaign/homedelivery/'>home delivery</Link>
                <Link to='/section/subscribe_campaign/digitalsubscription/'>digital subscription</Link>
                <Link to='/section/subscribe_campaign/games/'>games</Link>
                <Link to='/section/subscribe_campaign/cooking/'>cooking</Link>
                <div className='footer--subscription'>
                    <h4>
                        <Link to='/section/subscribe_campaign/emailnewsletter/'>email newsletter</Link>
                    </h4>
                    <h4>
                        <Link to='/section/subscribe_campaign/corporatesubscription/'>corporate subscription</Link>
                    </h4>
                    <h4>
                        <Link to='/section/subscribe_campaign/educationrate/'>education rate</Link>
                    </h4>
                    <h4>
                        <Link to='/section/mobileapplications/'>mobile applications</Link>
                    </h4>
                    <h4>
                        <Link to='/section/replicaeditions/'>replica editions</Link>
                    </h4>
                    <h4>
                        <Link to='/section/international/'>international</Link>
                    </h4>
                    <h4>
                        <Link to='/section/ca/'>canada</Link>
                    </h4>
                    <h4>
                        <Link to='/section/es/'>espanol</Link>
                    </h4>
                    <h4>
                        <Link to='/section/cn/'>中文网</Link>
                    </h4>
                </div>
            </div>
        </section>
    </div>
  )
}
