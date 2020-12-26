import { Component } from "react"

export type PropsFromToggleWrapper = {
  isActive: boolean
  toggle: () => void
}

type Props = {
  children: ({ isActive, toggle }: PropsFromToggleWrapper) => JSX.Element
}

type State = {
  isActive: boolean
}

class ToggleWrapper extends Component<Props, State> {
  state = {
    isActive: false,
  }

  toggle = () => {
    this.setState((state) => {
      return {
        isActive: !state.isActive,
      }
    })
  }

  render() {
    console.log('Render props using class wrapper');

    return (
      <>
        {this.props.children({
          isActive: this.state.isActive,
          toggle: this.toggle,
        })}
      </>
    )
  }
}

export default ToggleWrapper
