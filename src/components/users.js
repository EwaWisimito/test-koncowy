import React, { Component } from 'react';




class RandomUsers extends Component {
    state = {
        users: []
      }
    
      componentDidMount() {
        const headers = {
          'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
        }
        fetch('https://randomuser.me/api/?results=10', { headers })
          .then(response => response.json())
          .then(data => {
              console.log(data)
            data.forEach(userFromApi => {
                const user = {
                    name: "name",
                    url: userFromApi.url
                  };
                  
                  this.props.push(user)
           
            });
          });
    

      }
    
      render() {
       
        return (
          <div>
            <ul>
              {this.state.users.map(user => (
                <li key={user.id}>{user.name} <img src={user.url} alt="" /></li>
              ))}
            </ul>
          </div>
        );
      }
}




export default RandomUsers;