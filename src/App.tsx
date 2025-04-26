import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  const element = useRoutes(routes)
  return (
    <div style={{ backgroundImage: "var(--background)" }}>
      {element}
    </div >)
}

export default App
