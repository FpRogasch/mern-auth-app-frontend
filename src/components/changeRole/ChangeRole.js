import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';

const ChangeRole = () => {
    const [userRole, SetUserRole] = useState("");
    return (
        <div className='sort'>
            <form className='--flex-start'>
                <select value={userRole} onChange={(e) => SetUserRole(e.target.value)}>
                    <option value="">-- select --</option>
                    <option value="usuario">Usuario</option>
                    <option value="ejecutivo">Ejecutivo</option>
                    <option value="admin">Admin</option>
                    <option value="suspended">Suspended</option>
                </select>
                <button className='--btn --btn-primary'>
                    <FaCheck size={15} />
                </button>
            </form>
        </div>
    )
}

export default ChangeRole
