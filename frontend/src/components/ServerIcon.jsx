import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServerIcon = ({ icon }) => {
  return (
    <div className="p-0.5 flex justify-center">
      <div className="flex flex-col bg-primary w-12 h-12 items-center justify-center rounded-3xl transition duration-300 ease-linear cursor-pointer hover:bg-hover hover:rounded-2xl ">
        <FontAwesomeIcon className="text-gray-300 text-2xl" icon={icon} />
      </div>
    </div>
  )
}

export default ServerIcon