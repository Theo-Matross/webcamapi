import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import SearchCriteria from './searchCriteria';
import CountrytResultComponent from './countryresult';
import CategoryResultComponent from './categoryresult';
import ContinentResultComponent from './continentresult';
import GetLocationComponent from './getlocation';
import NearbyWebcamsComponent from './nearby';
import HeaderComponent from './header';
import ErrorPage from './Error';

function App () {
    return (
        <Router>
            <Routes>
                <Route element={<HeaderComponent/>}>
                    <Route path="/" element={<SearchCriteria/>}>
                        <Route index element={<Landing/>}/>
                        <Route path="country/:countrycode/:countryname" element={<CountrytResultComponent/>}/>
                        <Route path="category/:categoryid/:categoryname" element={<CategoryResultComponent/>}/>
                        <Route path="continent/:continentcode/:continentname" element= {<ContinentResultComponent/>}/>
                        <Route path="sharelocation" element={<GetLocationComponent/>}/>
                        <Route path=":nearby" element={<NearbyWebcamsComponent/>}/>
                        <Route path="geographicalsearch/:bbox" />
                        <Route path=":webcamId"/>
                    </Route>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
