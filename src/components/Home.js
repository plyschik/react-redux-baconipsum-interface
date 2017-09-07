import React from 'react';
import Filters from './../containers/Filters';
import List from './../containers/List';
import Loading from './../containers/Loading';

const Home = () => ((
    <div>
        <Filters />
        <List />
        <Loading />
    </div>
));

export default Home;