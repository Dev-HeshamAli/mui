
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/home/Home";
import Create from "./Pages/create/Create";
import NotFound from "./Pages/NotFound";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
);





function App() {
  return (
       <RouterProvider router={router} />
  );
}

export default App;
