import { IChange } from "../../types"

const onChange = ({ hide, setHide, scroll }: IChange) => {
    if (window.pageYOffset > 340 && scroll === "up") {
        setHide({ hide })
    } else if (window.pageYOffset > 340 && scroll === "down") {
        const hide = {
            transform: "translateY(-80px)",
            transition: "all .5s ease-in-out",
        }
        setHide(hide)
    } else {
        const animate = () => {
            if (window.scrollY >= 282 && window.pageYOffset < 340) {
                const hide = {
                    transform: "translateY(-80px)",
                    transition: "all .5s ease-in-out",
                }
                setHide(hide)
            } else if (window.scrollY < 282) {
                const hide = {
                    transition: "all .5s ease-in-out",
                }
                setHide(hide)
            }
        }
        window.addEventListener("scroll", animate)
    }
}
export default onChange
