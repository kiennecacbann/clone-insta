import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

const Suggestion = () => {
    const [suggestions, setSuggestion] = useState([]);
    useEffect(() => {
        setSuggestion(
            [...Array(5)].map((profile) => ({
                userId: faker.datatype.uuid(),
                userName: faker.internet.userName(),
                avatar: faker.image.avatar(),
            }))
        )

    }, []);
    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between '>
                <p className='text-sm font-semibold text-gray-400 mt-1'>Suggestions for you</p>
                <button className='font-semibold text-xs'>See All</button>
            </div>
            {suggestions.map((profile) => (
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center'>
                        <div className='w-8 h-8'>
                            <img className='rounded-full' src={profile.avatar} />
                        </div>
                        <div className='ml-4'>
                            <p className='text-sm font-semibold'>{profile.userName}</p>
                            <p className='text-xs text-gray-500'>Suggested for you</p>
                        </div>  
                    </div>
                    <button className='font-bold text-xs text-[#0095f6]'>Follow</button>
                </div>
            ))}
            <div className='flex flex-wrap text-semibold space-x-1 text-xs text-[#c7c7c7] mt-5'>
                <p>About</p>
                <span>&#183;</span>
                <p>Help</p>
                <span>&#183;</span>
                <p>Press</p>
                <span>&#183;</span>
                <p>API</p>
                <span>&#183;</span>
                <p>Jobs</p>
                <span>&#183;</span>
                <p>Privacy</p>
                <span>&#183;</span>
                <p>Terms</p>
                <span>&#183;</span>
                <p>Locations</p>
                <p className='mt-1'>Language</p>
            </div>
            <div>
                <p className='mt-5 text-xs text-semibold text-[#c7c7c7]'>© INSTAGRAM FROM KIENNECACBAN</p>
            </div>
        </div>
    )
}

export default Suggestion