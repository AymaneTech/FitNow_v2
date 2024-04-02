import { Link } from "react-router-dom"
import { Slink } from "./AuthButton"

const Navbar = () => {
  return (
    <header className="flex justify-between py-4">
        <Link className="text-2xl font-bold text-white">Progress</Link>
        <ul className="flex gap-4 items-center">
          <li><Slink to="/">Sign in</Slink></li>
          <li><Slink to="/">Sign up</Slink></li>
        </ul>
    </header>
  )
}

export default Navbar
