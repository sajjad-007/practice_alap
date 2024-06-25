import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/reg/Registration";
import RootLayout from "./component/layout/RootLayout";
import Home from "./pages/home/Home";
import Notification from "./pages/notification/Notification";
import Message from "./pages/message/Message";
import Setting from "./pages/settings/Setting";
import IsLoggedIn from "./component/layout/islogin/IsLoggedIn";
import Error from "./pages/error/Error";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<IsLoggedIn/>}>
          <Route element={<RootLayout/>}>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/notification' element={<Notification/>}/> 
            <Route path='/message' element={<Message/>}/> 
            <Route path='/setting' element={<Setting/>}/> 
          </Route>
        </Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
