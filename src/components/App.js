import React from 'react';
import ReactDOM from 'react-dom';
import FirstDiv from './FirstDiv';
import SecondDiv from './SecondDiv';
import ThirdDiv from './ThirdDiv';

class App extends React.Component
{
    render()
    {
        return(
            <div>
            <FirstDiv/>
            <SecondDiv/>
            <ThirdDiv/>
            </div>
        );
    }
}

export default App;