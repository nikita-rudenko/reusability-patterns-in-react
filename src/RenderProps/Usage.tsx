import { PropsFromToggleWrapper } from "./ToggleWrapper.func"
// import { PropsFromToggleWrapper } from "./ToggleWrapper.class"

function Example({ isActive, toggle }: {} & PropsFromToggleWrapper) {
  return (
    <div className="toggle">
      <div className={`light ${isActive ? "active" : ""}`}>RP</div>
      <button className="toggle-button" onClick={toggle}>
        {isActive ? "Off" : "On"}
      </button>
    </div>
  )
}

export default Example
