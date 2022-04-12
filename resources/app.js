import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Example from "./components/Example";
import Index from "./pages/index";

//Suppliers
import SuppliersList from "./pages/suppliers/list";

import Purchases from "./pages/purchases";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Example />} />
            <Route path="/test" element={<Index />} />
            <Route path="/suppliers" element={
                <Navigate to="/suppliers/list" replace/>
            }/>
            <Route path="/suppliers/list" element={<SuppliersList />} />
            <Route path="/purchases" element={<Purchases />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);
