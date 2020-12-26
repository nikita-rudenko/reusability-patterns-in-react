import logo from "./logo.svg"
import "./App.css"

import HOCExample from "./HOC"
import HooksExample from "./Hooks"
import RenderPropsExample from "./RenderProps"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "30px",
            color: "#282c34",
          }}
        >
          <RenderPropsExample />
          <HOCExample />
          <HooksExample />
        </div>
      </header>
    </div>
  )
}

export default App
