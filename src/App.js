import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Share from "./pages/Share";
import About from "./pages/About";
import Creator from "./pages/Creator";


export default function App() {
  return (
    <BrowserRouter basename="/gratitude/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Share />} />
          <Route path="about" element={<About />} />
          <Route path="creator" element={<Creator />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);