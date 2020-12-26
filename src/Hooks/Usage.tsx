import useToggle from "./useToggle"

const Example: React.FC = () => {
  const { isActive, toggle } = useToggle()

  return (
    <div className="toggle">
      <div className={`light ${isActive ? "active" : ""}`}>Hooks</div>
      <button className="toggle-button" onClick={toggle}>
        {isActive ? "Off" : "On"}
      </button>
    </div>
  )
}

export default Example
