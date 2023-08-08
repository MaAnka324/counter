import React from 'react';
import Reset from "./components/Reset";
import {Route, Routes} from 'react-router-dom';
import Settings from "./components/Set";

function App() {

    return (
        <div>
            {/*{<Routes>*/}
            {/*    <Route path={'/'} element={<Settings/>}/>*/}
            {/*    <Route path={'/reset'} element={<Reset/>}/>*/}
            {/*</Routes>*/}
            {/*}*/}

            <Routes>
                <Route path="/" >
                    <Route index element={<Settings />} />
                    <Route path="reset" element={<Reset />} />
                    <Route path='*' element={<h1>404: PAGE NOT FOUND</h1>} />
                </Route>
            </Routes>

        </div>
    )
}

export default App;
