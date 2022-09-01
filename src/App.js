import React, {useState} from 'react';
import './index.scss';
import {Success} from './components/Success';
import {Users} from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App () {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(https://reqres.in/api/users)
    }, [])
    return (
        <div className="App">
            <Users/>
            {/* <Success /> */}
        </div>
    );
}

export default App;
