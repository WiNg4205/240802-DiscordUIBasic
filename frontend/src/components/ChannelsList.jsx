import { useLocation } from "react-router-dom"

const ChannelsList = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  return (
    <div className="bg-secondary w-56">
      <div className="text-gray-100 h-12 border-b border-tertiary flex items-center pl-4 font-semibold">{currentPath}</div>
    </div>
  )
}

export default ChannelsList
