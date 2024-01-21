import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { userInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'
import { taskColumns, userColumns } from './datatablesource'
import NewHotel from './pages/newHotel/NewHotel'


function App() {
  const { darkMode } = useContext(DarkModeContext)

  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user == null){
      return <Navigate to="/login"/>
    }

    return children

  }
  return (
    <div className={darkMode? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
            <Route path='/' >
              <Route path="login" element={<Login/>}></Route>
              <Route index element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
                }>                
              </Route>

              <Route path='users'>
                <Route index element={
                  <ProtectedRoute>
                  <List columns={userColumns}/>
                </ProtectedRoute>
                }></Route>

                <Route path=":userId" element={
                  <ProtectedRoute>
                  <Home/>
                  </ProtectedRoute>
                }></Route>

                <Route path="new" element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add new user" />
                  </ProtectedRoute>
                }></Route>
              </Route>

              <Route path='tasks'>
                <Route index element={
                  <ProtectedRoute>
                    <List columns={taskColumns}/>
                  </ProtectedRoute>
                }></Route>

                <Route path=":productId" element={
                  <ProtectedRoute>
                    <Single/>
                  </ProtectedRoute>
                }></Route>

                <Route path="new" element={
                  <ProtectedRoute>
                  <NewHotel />
                  </ProtectedRoute>
                }></Route>                
              </Route>

              
              
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
