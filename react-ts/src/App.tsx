import TodoApp from "./todoApp/TodoApp"
import { TodoContextProvider } from "./todoApp/TodoContextProvider"

const App = () => {
  return (
    <TodoContextProvider>
       <TodoApp/>
    </TodoContextProvider>
  )
}

export default App