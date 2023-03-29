import Logo from "/public/Logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shaired/Wrapper"


function Header() {
  return (
    <header className=" sticky top-0 z-10 bg-white">
    <Wrapper>
    <header className="flex justify-between py-4 px-2  items-center" >
    <div> 
       <Image src={Logo} alt="panver DAO"/>
       </div>
    <ul className="flex space-x-8">
        <li>
        <Link href={"/"}>Home</Link>
          </li>
        <li>
         <Link href={"/courses"}>Courses</Link></li>
    </ul>
    </header>
    </Wrapper>
    
    </header>
  )
}

export default Header