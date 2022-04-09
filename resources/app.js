import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Example from "./components/Example";
import Index from "./pages/index";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Example />} />
            <Route path="/test" element={<Index />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);
