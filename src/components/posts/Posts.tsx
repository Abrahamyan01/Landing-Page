import { Post } from './post/Post'
import { IPosts } from '../../types'
import "./Posts.css"

export const Posts = (
    { data, filter, setActive, setChildren }: { data: IPosts[], filter: string, setActive: (active: boolean) => void, setChildren: (post: IPosts) => void }
) => {
    return (
        <div className='container'>
            {data
                .filter((post) => {
                    return filter.toLowerCase() === ""
                        ? post
                        : post.title.toLowerCase().includes(filter)
                })
                .map((post) => {
                    return <Post key={post.title} post={post} setActive={setActive} setChildren={setChildren} />
                })}
        </div>
    )
}
