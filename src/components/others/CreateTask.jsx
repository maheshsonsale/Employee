import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='flex justify-between items-center gap-5 mt-5 bg-zinc-800 p-5 rounded-md '>
                <div >
                    <div className='mb-5'>
                        <h3>Task Title</h3>
                        <input type="text" className='bg-transparent border-[1px] border-green-300 p-2 rounded-md w-[400px]' placeholder='Enter task title' />
                    </div>


                    <div className='mb-5'>
                        <h3>Date</h3>
                        <input type="date" className='bg-transparent border-[1px] border-green-300 p-2 rounded-md w-[400px]' />
                    </div>
                    <div className='mb-5'><h3>Assign to </h3>
                        <input type="text" placeholder='Employee Name' className='bg-transparent border-[1px] border-green-300 p-2 rounded-md w-[400px]' />
                    </div>
                    <div className='mb-5'><h3>Category </h3>
                        <input type="text" placeholder='Design,dev,etc' className='bg-transparent border-[1px] border-green-300 p-2 rounded-md w-[400px]' />
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Description</h3>
                        <textarea className='bg-transparent border-[1px] border-green-300 p-2 rounded-md w-[400px]' placeholder='Enter task description' rows="10"></textarea>
                    </div>
                    <button className='bg-green-400 w-full p-2 rounded-md font-semibold cursor-pointer'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask