import { AiOutlineClose } from "react-icons/ai"
import { IPosts } from "../../types"
import "./modal.css"


const Modal = (
    { active, setActive, children }: { active: boolean, setActive: (active: boolean) => void, children: IPosts }
) => {
    return (
        <div className={active ? "modal active" : "modal"}
            onClick={() => { setActive(false) }}
        >
            <div className={active ? "modal_content active" : "modal_content"}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={children?.img} srcSet={children?.img_2x} alt={children?.tags} />
                <h2>{children?.title}</h2>
                <h4>{children?.tags}</h4>
                <p style={{ maxWidth: "450px" }}>{children?.text}</p>
                <span>{children?.date} {children?.views} Views </span>
                <div className="close"
                    onClick={() => { setActive(false) }}
                > <AiOutlineClose /></div>
            </div>
        </div>
    )
}
export default Modal