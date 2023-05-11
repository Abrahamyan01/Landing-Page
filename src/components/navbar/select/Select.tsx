import { AiOutlineDown } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import { useState } from "react"
import "./select.css"

export const Select = ({ name }: { name: string }) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="select"
            onMouseLeave={() => { setOpen(false) }}
        >
            <div
                className="title"
                onMouseOver={() => { setOpen(true) }}
            >
                <b>{name}</b>
                <AiOutlineDown style={{ fontSize: "12px" }} />
            </div>
            {
                open && <ul onMouseLeave={() => { setOpen(false) }}>
                    <li>
                        <p>Post Header</p>
                        <AiOutlineRight style={{ fontSize: "10px" }} />
                    </li>
                    <li>
                        <p>Post Layout</p>
                        <AiOutlineRight style={{ fontSize: "10px" }} />
                    </li>
                    <li>
                        <p>Share Buttons</p>
                        <AiOutlineRight style={{ fontSize: "10px" }} />
                    </li>
                    <li>
                        <p>Gallery Post</p>
                        <AiOutlineRight style={{ fontSize: "10px" }} />
                    </li>
                    <li>
                        <p>Video Post</p>
                        <AiOutlineRight style={{ fontSize: "10px" }} />
                    </li>
                </ul>
            }
        </div >
    )
}
