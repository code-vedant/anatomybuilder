import { DndProvider } from "react-dnd"
import Homepage from "./pages/Homepage"
import { HTML5Backend } from "react-dnd-html5-backend"

const App = () =>{
  return (
    <>
    <DndProvider backend={HTML5Backend}>
    <main>
      <Homepage/>
    </main>
    </DndProvider>
    </>
  )
}

export default App