import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { routes, userRoute } from "./routes/routes";
import { UserLayout } from "./layout/user-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ component: Element, id, path }) => (
            <Route
              index={!path ? true : false}
              path={path}
              key={id}
              element={<Element />}
            />
          ))}
          <Route path="profile" element={<UserLayout />}>
            {userRoute.map(({ component: Element, id, path }) => {
              return (
                <Route
                  index={!path ? true : false}
                  path={path}
                  key={id}
                  element={<Element />}
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
