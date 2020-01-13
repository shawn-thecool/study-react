import * as React from 'react'
import Profile from './components/Profile'
import Counter from './components/Counter'
import Users from './components/Users'

const App: React.FC = () => {
  const users = [
    { id: 'user-1234', name: 'shawn', age: 33 },
    { id: 'user-4321', name: 'merlin', age: 33 }
  ]
  return (
    <div>
      <Profile name="shawn" job="dev" />
      <Counter title="Counter" />
      <Users users={users} />
    </div>
  )
}

export default App
