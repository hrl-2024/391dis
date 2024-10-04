import './App.css'

import { CourseStaff } from './components/CourseStaff'

function App() {

  return (
    <div>
      <h2>Welcome to React application</h2>
      <div>
        <CourseStaff name="Taymaz" title="Professor" rating={100} />
        <CourseStaff name="Sofya" title="Professor" rating={100} />
      </div>
    </div>
  )
}

export default App