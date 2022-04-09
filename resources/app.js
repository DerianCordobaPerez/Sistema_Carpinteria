import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Example from "./components/Example";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Example />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);
