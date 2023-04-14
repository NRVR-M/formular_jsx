import './styles/App.css';
import './styles/custom.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//components
import Routing from './components/Routing'

//Pages
// import Home from './pages/Home';
// import Tagesmenu from './pages/Tagesmenu'
// import LunchMenu from "./pages/LunchMenu";
// import Login from "./pages/Login";
// import Eingeloggt from "./pages/Eingeloggt";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //
  //   },
  //   {
  //     path: "/tagesmenu",
  //     element: <Tagesmenu />
  //   },
  //   {
  //     path: "/lunch-menu",
  //     element: <LunchMenu />
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />
  //
  //   },
  //   {
  //     path: "/eingeloggt",
  //     element: <Eingeloggt />
  //
  //   },
  //
  // ]);

  return (
  <>
  <Routing />
  </>
      
    // <>
    //   <RouterProvider router={router} />
    // </>

  );
}



export default App;

