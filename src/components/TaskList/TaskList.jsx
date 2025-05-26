import React from 'react'

const TaskList = () => {
    return (
        <div id='taskList' className='h-[300px] flex justify-start overflow-x-auto items-center gap-5 flex-nowrap rounded-2xl border-0 bg-red-300  w-full mt-10 py-5'>
            <div className='w-[300px] flex-shrink-0 bg-red-400 h-full rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
                    <h4 className='text-sm'>26 May 2025</h4>
                </div>

                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos culpa voluptates laudantium aut inventore.</p>
            </div>
            <div className='w-[300px] flex-shrink-0 bg-green-400 h-full rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
                    <h4 className='text-sm'>26 May 2025</h4>
                </div>

                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos culpa voluptates laudantium aut inventore.</p>
            </div>
            <div className='w-[300px] flex-shrink-0 bg-blue-400 h-full rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
                    <h4 className='text-sm'>26 May 2025</h4>
                </div>

                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos culpa voluptates laudantium aut inventore.</p>
            </div>
            <div className='w-[300px] flex-shrink-0 bg-yellow-400 h-full rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
                    <h4 className='text-sm'>26 May 2025</h4>
                </div>

                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos culpa voluptates laudantium aut inventore.</p>
            </div>
        </div>
    )
}

export default TaskList