import { useState } from "react"

export type PropsFromToggleWrapper = {
  isActive: boolean
  toggle: () => void
}

type Props = {
  children: ({ isActive, toggle }: PropsFromToggleWrapper) => JSX.Element
}

const ToggleWrapper = ({ children }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  console.log("Render props using function wrapper")

  return <>{children({ isActive, toggle })}</>
}

export default ToggleWrapper
