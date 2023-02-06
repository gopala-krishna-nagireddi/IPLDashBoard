// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props

  const modifiedMatchDetails = {
    id: matchDetails.id,
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  }

  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = modifiedMatchDetails

  return (
    <li className="recent-match-item">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`result-${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
