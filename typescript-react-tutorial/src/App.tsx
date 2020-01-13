import * as React from 'react'
import Profile from './components/Profile'
import Counter from './components/Counter'
import Users from './components/Users'
import IUser from './interfaces/user/IUser'
import IKakaoUser from './interfaces/user/IKakaoUser'

const App: React.FC = () => {
  const users: IUser[] = [
    { id: 'user-1234', name: 'shawn', age: 33 },
    { id: 'user-4321', name: 'merlin', age: 33 }
  ]

  const kakaoUsers: IKakaoUser[] = [
    { id: 'user-1234', name: 'shawn', age: 33, talkId:'123' },
    { id: 'user-4321', name: 'merlin', age: 33, talkId:'238y'}
  ]

  return (
    <div>
      <Profile name="shawn" job="dev" />
      <Counter title="Counter" />
      <Users users={users} />
      <Users users={kakaoUsers} />
    </div>
  )
}

export default App
