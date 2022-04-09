import * as React from "react";
import Header from "../components/utils/Header";

export default function layout({children}) {
    return(
        <>
            <Header />
            {children}
            <footer></footer>    
        </>
    );
}