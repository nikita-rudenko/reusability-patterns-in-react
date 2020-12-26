import { useState } from "react"

function useToggle() {
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  console.log("Custom hook")

  return {
    isActive,
    toggle,
  }
}

export default useToggle
