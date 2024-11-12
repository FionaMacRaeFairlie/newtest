import React,  { useEffect, useState, useCallback } from "react";
import Account from './components/Account';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import Textinput from './components/Textinput';
import TodoApp from './components/todo/Todoapp';


function App(){
  const [status, setStatus] =  useState({isLoading: true});
  const [users, setUsers] =useState([])
  const[ error,setError] =useState( null)
  

  const fetchUsers= useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setStatus({isLoading:false})
        setUsers(data)
        })
      .catch((err) => console.error(err));
    }, []);
  
    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    return (
      <>
      <div className="container">
         <div className="row">
          <div className="col-sm">
           <h1>Display Users</h1>
           <div className="border border-primary border-2 rounded m-2 p-2">
                    {!status.isLoading ? (
                      users.map((user) => {
                        return <Account key={user.username} user={user} />;
                      })
                    ) : (
                      <h3>Fetching Users...</h3>
                    )}
              </div>
          </div>
          <div className="col-sm">       
            <h1>Other utilities</h1>
            <div className="border border-primary border-2 rounded m-2 p-2">
                <Greeting name="John" />
                <Counter />
                <Textinput />
              </div>  
             <div>
                <TodoApp />
             </div>
          </div>
        </div>   
        </div>
      </>
    );
  }

export default App;
