import Usage from "./Usage"
// import ToggleWrapper from './ToggleWrapper.func'
import ToggleWrapper from "./ToggleWrapper.class"

const RenderPropsExample = () => {
  return (
    <ToggleWrapper>
      {({ isActive, toggle }) => (
        <Usage isActive={isActive} toggle={toggle} />
      )}
    </ToggleWrapper>
  )
}

export default RenderPropsExample
