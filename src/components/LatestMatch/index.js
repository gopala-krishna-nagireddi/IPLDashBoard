// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const modifiedLatestMatchDetails = {
    id: latestMatchDetails.id,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = modifiedLatestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="competing-details-container">
        <div>
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="competing-team-logo-sm"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <img
        className="competing-team-logo-lg"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <hr className="hr-line" />
      <div className="innings-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>ManOfTheMatch</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
