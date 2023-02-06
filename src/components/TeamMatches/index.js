// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, teamId: '', isLoading: true}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatchDetails: data.recent_matches,
    }

    this.setState({teamDetails: modifiedData, teamId: id, isLoading: false})
  }

  render() {
    const {teamDetails, teamId, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatchDetails} = teamDetails

    return (
      <div className={`team-matches-container ${teamId}-bg-color`}>
        {isLoading ? (
          <div testid="loader" className="spinner-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <img className="banner-img" src={teamBannerUrl} alt="team banner" />
            <p className="latest-match-heading">Latest Matches</p>
            {latestMatchDetails !== undefined && (
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            )}
            {latestMatchDetails !== undefined && (
              <ul className="recent-matches-list">
                {recentMatchDetails.map(eachMatch => (
                  <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
