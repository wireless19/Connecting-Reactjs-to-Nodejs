import React, { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(function () {
        fetch("/userz").then(function (res) {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonResult => setUsers(jsonResult.usersList))
    })

    return <div>
        {users.map(eachUser => <li>{eachUser}</li>)}

    </div>;

}

export default Users;