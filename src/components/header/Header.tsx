import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../../images/logotype.png"
import "./header.css"

export const Header = (
    { setFilter, setMenu }: { setFilter: (e: string) => void, setMenu: (menu: boolean) => void }
) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header className='header'>
            <div className='head'>
                <div className='burger'
                    onClick={() => { setMenu(true) }}
                >
                    <AiOutlineMenu className='icon' />
                </div>
                <img src={logo} alt="Logo" />
                <div
                    className='searchBtn'
                    onClick={() => {
                        setOpen(!open)
                        if (open) setFilter("")
                    }}
                >
                    {open
                        ? <AiOutlineClose className='icon' />
                        : <AiOutlineSearch className='icon' />
                    }
                </div>
                {open && <input
                    className='input'
                    type="text"
                    onChange={(e) => {
                        setFilter(e.target.value)
                    }} />}
            </div>
        </header>
    )
}
