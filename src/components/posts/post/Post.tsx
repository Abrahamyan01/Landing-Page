import { IPosts } from '../../../types'
import "./Post.css"

export const Post = ({ post, setActive, setChildren }: { post: IPosts, setActive: (active: boolean) => void, setChildren: (post: IPosts) => void }) => {

    return (
        <div className='post'>
            <img src={post.img} alt={post.tags} srcSet={post.img_2x} />
            <h5>{post.tags}</h5>
            <h2
                onClick={() => {
                    setActive(true)
                    setChildren(post)
                }}
            >{post.title}</h2>
            <span><b>Niek Bove</b> {post.date} {post.views} Views </span>
            <p>{post.text}</p>
        </div>
    )
}
