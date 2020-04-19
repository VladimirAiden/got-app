import React from 'react';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const App = () => {
    return (
        <> 
            <div className="container">
                <Header />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-offset-0">
                        <RandomChar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <CharDetails />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;