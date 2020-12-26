import { Component } from "react"

export type PropsFromToggleHOC = {
  isActive: boolean
  toggle: () => void
}

type State = {
  isActive: boolean
}

function withToggle<P>(
  WrappedComponent: React.ComponentType<P & PropsFromToggleHOC>
) {
  return class extends Component<P, State> {
    state: State = {
      isActive: false,
    }

    toggle = () => {
      this.setState((state: State) => {
        return {
          isActive: !state.isActive,
        }
      })
    }

    render() {
      console.log("Higher-Order component")

      return (
        <WrappedComponent
          {...this.props}
          isActive={this.state.isActive}
          toggle={this.toggle}
        />
      )
    }
  }
}

export default withToggle
