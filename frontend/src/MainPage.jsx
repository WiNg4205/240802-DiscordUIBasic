import ChannelsList from "./components/ChannelsList"
import ServersList from "./components/ServerList"

const MainPage = () => {
  return (
    <div className="bg-primary min-h-screen w-full flex">
      <ServersList />      
      <ChannelsList />
    </div>
  )
}

export default MainPage
