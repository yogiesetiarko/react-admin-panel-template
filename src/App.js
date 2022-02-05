import React from "react";
import "./styles.css";

import { useRoutes } from "react-router-dom";
import HomeView from "./views/Home/Home";
import AboutView from "./views/About";
import NavBar from "./layouts/Dashboard/NavBar";
// import { createBrowserHistory } from "history";
// import { renderRoutes } from "react-router-config";
// import routes from "./routes";

// const history = createBrowserHistory();

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }

function App() {
  let routes = [
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <HomeView /> },
        {
          path: "/courses",
          element: <AboutView />,
          children: [
            // { index: true, element: <CoursesIndex /> },
            // { path: "/courses/:id", element: <Course /> }
          ]
        }
        // { path: "*", element: <NoMatch /> }
      ]
    },
    {
      path: "/auth",
      element: <NavBar />,
      children: [{ path: "/auth/login", element: <div>Login ini</div> }]
    },
    {
      path: "/aaa",
      element: <NavBar />,
      children: [{ index: true, element: <div>home inside aaa</div> }]
    }
  ];
  let newRoutes = useRoutes(routes);
  return <>{newRoutes}</>;
  // return (
  //   <Routes>
  //     <Route path="/" element={<NavBar />}>
  //       <Route index element={<HomeView />} />
  //       <Route path="about" element={<AboutView />} />
  //     </Route>
  //     <Route path="/aaa" element={<NavBar />}>
  //       <Route index element={<HomeView />} />
  //       <Route path="about" element={<AboutView />} />
  //     </Route>
  //   </Routes>
  // );

  // return (
  //   <div className="App">
  //     <div>aha</div>
  //   </div>
  // );
}

export default App;
