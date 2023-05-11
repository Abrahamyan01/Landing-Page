import { Select } from '../select/Select'
import { AiOutlineClose } from "react-icons/ai"
import logo from "../../../images/logotype.png"
import "./navmobile.css"

export const NavMobile = (
    { menu, setMenu }: { menu: boolean, setMenu: (menu: boolean) => void }
) => {
    const names = ["Demos", "Post", "Features", "Categories", "Shop"]
    return (
        <div className={menu ? "mobile active" : "mobile"}
            onClick={() => { setMenu(false) }}
        >
            <div className="blur" />
            <div className="content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="menu_head">
                    <img src={logo} alt="Logo" />
                    <div
                        onClick={() => { setMenu(false) }}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
                <ul>
                    {names.map((name) => {
                        return <li key={name}>
                            <Select name={name} />
                        </li>
                    })}
                    <li style={{
                        border: "none",
                        padding: "15px 0"
                    }}><b>Buy Now</b></li>
                </ul>
            </div>
        </div>
    )
}
