import Find from "../../components/Find"
import Message from "../../components/Message"
import OurClient from "../../components/OurClient"
import OurTeam from "../../components/OurTeam/OurTeam"
import Services from "../../components/Services"

const Home = () => {
  return (
    <div>
      <Services/>
      <OurTeam/>
      <Message/>
      <OurClient/>
      <Find/>
    </div>
  )
}

export default Home