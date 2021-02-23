import React, { useState } from "react";


function AddUserForm({ addUser }) {
    const [user, setUser] = useState({ id: null, name: '', username: '' })

    function handleSubmit(e) {
        e.preventDefault()
        if (!user.name || !user.username) return
        addUser(user)
        setUser({ id: null, name: '', username: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm
