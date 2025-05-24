import React from 'react'

export default function Login() {
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-red-600'>
                <form className='flex flex-col item justify-center'>
                    <input className='border-2 border-emerald-600 rounded-full px-5 py-3 text-xl' type="email " placeholder='Enter your email' />
                    <input type="password" placeholder='Enter your password' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}
