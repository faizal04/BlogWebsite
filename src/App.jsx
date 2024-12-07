import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Login from "./pages/Login";
import { Auth } from "./contexts/Auth";
import CreateBlog from "./pages/CreateBlog";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <Auth>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/createblog"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Auth>
    </>
  );
}

export default App;
