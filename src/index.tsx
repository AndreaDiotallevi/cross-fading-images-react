import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import fluid0 from "./assets/fluid-0.png"
import fluid1 from "./assets/fluid-1.png"
import fluid2 from "./assets/fluid-2.png"
import fluid3 from "./assets/fluid-3.png"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <App images={[fluid0, fluid1, fluid2, fluid3]} />
    </React.StrictMode>,
)
