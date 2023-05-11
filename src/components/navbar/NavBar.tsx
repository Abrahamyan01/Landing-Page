import { Select } from './select/Select'
import "./navbar.css"



export const NavBar = ({ hide }: { hide: object }) => {
    const names = ["Demos", "Post", "Features", "Categories", "Shop"]
    return (
        <nav className="nav" style={hide} >
            <ul>
                {names.map((name) => {
                    return <li key={name}>
                        <Select name={name} />
                    </li>
                })}
                <li><b>Buy Now</b></li>
            </ul>
        </nav >
    )
}
