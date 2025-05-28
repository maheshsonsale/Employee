import React, { useState } from 'react'

export default function Login({handleLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const sumbmithandler = (e) => {
        e.preventDefault();
        // Handle login logic here
        handleLogin(email,password)
        console.log(email);
        console.log(password);

        setEmail('');
        setPassword('');

    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='flex items-center justify-center h-full w-full  to-emerald-900'>
                <form className='flex flex-col item justify-center p-20 gap-5 border-2 border-emerald-600 rounded-lg w-[400px] h-[400px]'
                onSubmit={sumbmithandler}>

                    <input
                        className='border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-black placeholder:text-white'
                        type="email "
                        placeholder='Enter your email' required
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />

                    <input
                        className='border-2 border-emerald-600 rounded-full px-5 py-3  text-xl text-black placeholder:text-white'
                        type="password" placeholder='Enter your password'
                        value={password}
                        required
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <button className='cursor-pointer bg-blue-700 border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-black placeholder:text-white'>Login</button>
                </form>
            </div>
        </div>
    )
}
