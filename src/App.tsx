import { useEffect, useState } from "react";
import { Header } from "./components/header/Header"
import { NavMobile } from "./components/navbar/mobile/NavMobile";
import { NavBar } from "./components/navbar/NavBar";
import { Hero } from "./components/hero/Hero";
import { Posts } from "./components/posts/Posts";
import { IPosts } from "./types";
import Modal from "./components/modal/Modal";
import useScrollDirection from './components/navbar/useScrollDirection'
import onChange from "./components/navbar/onChange";
import axios from 'axios'
import './App.css';

const App = () => {
  const [data, setData] = useState<IPosts[]>([])
  const [filter, setFilter] = useState<string>("")
  const [hide, setHide] = useState<object>({})
  const [active, setActive] = useState<boolean>(false)
  const [children, setChildren] = useState<IPosts>(data[0])
  const [menu, setMenu] = useState<boolean>(false)
  const scroll = useScrollDirection()

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://cloud.codesupply.co/endpoint/react/data.json")
      setData(response.data)
    }
    getData()
  }, [])

  useEffect(() => {
    onChange({ hide, setHide, scroll })
  }, [scroll])


  return (
    <div className="App">
      <Header setFilter={setFilter} setMenu={setMenu} />
      <NavMobile menu={menu} setMenu={setMenu} />
      <NavBar hide={hide} />
      <Hero />
      <Posts data={data} filter={filter} setActive={setActive} setChildren={setChildren} />
      <Modal active={active} setActive={setActive} children={children} />
    </div>
  )
}
export default App

