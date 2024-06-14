import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Registration from "./pages/auth/reg/Registration";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
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
