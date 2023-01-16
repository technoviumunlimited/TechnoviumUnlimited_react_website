import React from 'react'
import '../../Style/LoginModal.scss'

export default function LoginModal({open, onClose}) {

    if(!open){
        return null
    }
    return (
        <div className='blur-background'>
            <div className="form-container">
                <form>
                    <h1>Login</h1>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Name ...' />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password ...' />
                </form>
                
                <form>
                    <h1>Signup</h1>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Name ...' />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password ...' />
                    <label htmlFor="">Repeat password</label>
                    <input type="password" placeholder='Password ...' />
                </form>
                <button onClick={onClose} >Close</button>
            </div>
        </div>
    )
}
