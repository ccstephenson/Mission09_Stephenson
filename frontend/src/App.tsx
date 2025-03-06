
import './App.css'
import teamsData from './CollegeBasketballTeams.json'

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <>
    <h1>Welcome</h1>
    <h2>Here we'll list all college basketball teams with the following information: School Name, Mascot Name, Location</h2>
    </>
  )
}

function Team({school, name, city, state} : TeamProps){

  return(
    <>
      <h3>{school}</h3>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
      <hr />
    </>
  )
}

function TeamList(){

  return(
    <>
    {
      
      teamsData.teams.map((singleTeam: TeamProps) => (
        <Team {...singleTeam} />
      ))
    }
    </>
  )
}

function App() {

  return (
    <>
      <Welcome />
      <TeamList />
    </>
  )
}

export default App
