import withToggle, { PropsFromToggleHOC } from "./withToggle"

const Usage: React.FC<{} & PropsFromToggleHOC> = ({ isActive, toggle }) => {
  return (
    <div className="toggle">
      <div className={`light ${isActive ? "active" : ""}`}>HOC</div>
      <button className="toggle-button" onClick={toggle}>
        {isActive ? "Off" : "On"}
      </button>
    </div>
  )
}

export default withToggle<{}>(Usage)
