import React, { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

function App() {
  const usersData = [
    { id: 1, name: 'Neelam', username: 'neelamchaubey28' },
    { id: 2, name: 'John', username: 'johndoe' },
    { id: 3, name: 'jane', username: 'janedoe' },
  ]

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', username: '' })
  const [editing, setEditing] = useState(false)


  function addUser(user) {
    user.id = users.length + 1
    const newUsers = [...usersData, user]
    setUsers(newUsers)
  }

  function deleteUser(id) {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
    setEditing(false)
  }

  function editUser(user) {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  function updateUser(id, updatedUser) {
    setEditing(false)
    const newUsers = users.map(user => user.id === id ? updatedUser : user)
    setUsers(newUsers)
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
