import React, { useState, useEffect } from "react";

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    function handleSubmit(e) {
        e.preventDefault()
        props.updateUser(user.id, user)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)}
                className="button muted-button">Cancel</button>
        </form>
    )
}

export default EditUserForm
