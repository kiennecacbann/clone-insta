import React from 'react'
import profile from '../assets/kienne1.jpg'
import Post from "./Post"
const Posts = () => {
    const posts = [{
        id: '123',
        userName: 'Kienne',
        profilePic: profile,
        postPhoto: profile,
        caption: 'Hello from The Hell!',
    },
    {
        id: '234',
        userName: 'Kiendeptraine',
        profilePic: profile,
        postPhoto: profile,
        caption: 'Hello from The Heaven!',
    }]
    return (
    <div className='mt-1 mx-1'>
        {
            posts.map((post) => (
                <Post
                    key={post.id}
                    userName={post.userName}
                    profilePic={post.profilePic}
                    postPhoto={post.postPhoto}
                    caption={post.caption}

                />
            ))

        }
    </div>
    )
}

export default Posts