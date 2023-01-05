import React from 'react'
import Image from 'next/image'
import dots from "../assets/dots.png"
import hearth from "../assets/hearth.png"
import comment from "../assets/comment.png"
import message from "../assets/message.png"
import save from "../assets/save.png"
import emoji from "../assets/emojy.png"

const Post = ({ userName, profilePic, postPhoto, caption }) => {
    const comments = [
        {
            userName: "Neik",
            comment: "Hello from The Helllll!",
        },
        {
            userName: "Gnurt Neik",
            comment: "Hello from The Helllll!",
        },
    ];
    return (
        <div>
            <div className='border rounded-lg my-3'>
                {/** Header**/}
                <div className='flex items-center p-3'>
                    <div className='flex items-center w-full'>
                        <div className='h-8 w-8 mr-3'>
                            <img src={profilePic.src} className="rounded-full" />
                        </div>
                        <div className=''>
                            <p className='font-semibold text-sm'>{userName}</p>
                            <p className='text-sm'>Original Audio</p>
                        </div>
                    </div>
                    <div className='h-6 w-6'>
                        <Image src={dots} />
                    </div>
                </div>
                {/** Photo**/}
                <div className=''>
                    <img src={postPhoto.src} alt="" />
                </div>
                <div className='m-3'>
                    <div>
                        <div className='flex justify-between'>
                            {/**Button**/}
                            <div className='flex space-x-4'>
                                <div className='Btn'>
                                    <Image src={hearth} />
                                </div>
                                <div className='Btn'>
                                    <Image src={comment} />
                                </div>
                                <div className='Btn'>
                                    <Image src={message} />
                                </div>
                            </div>
                            <div className='Btn'>
                                <Image src={save} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 custom-font'>
                        <p>999 likes</p>
                    </div>
                    {/** Caption**/}
                    <div className='flex items-center mt-2 '>
                        <p className='custom-font mr-2 whitespace-nowrap'>{userName}</p>
                        <p className='truncate' >{caption}</p>
                    </div>
                    {/** View all**/}
                    <p className='text-sm text-gray-500 mt-1 my-2'>View all 50 comments</p>
                    {/** Comments**/}
                    <div className=''>
                        {comments.map((comment) => (
                            <div className='max-w-24 overflow-y-auto flex justify-between'>
                                <div className='flex items-center truncate'>
                                    <p className='custom-font mr-2'>{comment.userName}</p>
                                    <p className='truncate mr-2'>{comment.comment}</p>
                                </div>
                                <div className='h-3 w-3 shrink-0'>
                                    <Image src={hearth} />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/** TimeStamp **/}
                    <p className='text-gray-400 text-xs my-2 '>4 minutes ago</p>
                    {/**  **/}
                    <div className='border-t-mx-3 my-3'> </div>
                    <div className='flex justify-between p-1'>
                        <div className='flex'>
                            <div className='Btn mr-4'>
                                <Image src={emoji}/>
                            </div>
                            <input className="outline-0" type="text" placeholder='Add a comment...'/>
                        </div>
                    <button className='font-bold text-sm text-[#0095f6]' >Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post