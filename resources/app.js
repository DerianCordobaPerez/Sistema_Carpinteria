import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Example from "./components/Example";
import Index from "./pages/index";

//Suppliers
import SuppliersList from "./pages/suppliers/list";
import Purchases from "./pages/purchases";

import Layout from "./layouts/Layout";

import Login from "./pages/login";

import { useAuth } from "./libs/auth";

function App() {
    const [logged, session] = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                {!logged && (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </>
                )}
                {logged && (
                    <>
                        <Route
                            path="/"
                            element={<Layout>{<Example />}</Layout>}
                        />
                        <Route
                            path="/test"
                            element={<Layout>{<Index />}</Layout>}
                        />
                        <Route
                            path="/suppliers"
                            element={<Navigate to="/suppliers/list" replace />}
                        />
                        <Route
                            path="/suppliers/list"
                            element={<SuppliersList />}
                        />
                        <Route
                            path="/purchases"
                            element={<Layout>{<Purchases />}</Layout>}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
