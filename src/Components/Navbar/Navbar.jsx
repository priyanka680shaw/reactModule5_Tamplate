import logo from './logo.png'
import { SiHootsuite } from "react-icons/si";
import Button from '../Button/Button';
function Navbar() {
    const menuli = {
        margin : "0px 25px",
        fontWeight : "bold"
    }
    return(
        <>
            <div className="outerComtainer w-full green-950 flex justify-center" style={{ backgroundColor : "#f3f4f6"}}> 
                <div className="innerContainer w-full green-950 flex justify-between items-center p-4" style={{width : "95%" }}>
                    <div className="logo-menu flex  w-2/5 justify-between items-center  green-950 ">
                        <div className="logo flex items-center">
                        <SiHootsuite   style = {{fontSize : "25px"}}/>
                        <h1 style={{ fontWeight : "bold" , fontSize : "20px" , margin : "0px 10px"}}>Hootsuite</h1>
                        </div>
                        <div className="menu">
                            <ul className='flex'>
                                <li style={menuli}>Platfrom </li>
                                <li style={menuli}>Place</li>
                                <li style={menuli}>Enterprice</li>
                                <li style={menuli}>Resources</li>
                                <li style={menuli}>Education</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contactDetails flex  w-2/5 justify-end items-center green-950 ">
                        <ul className='flex justify-end items-center'>
                            <li style={menuli}>Contact Us</li>
                            <li style={menuli}>Login</li>
                            <li style={menuli}> <button style={{background: "green" , padding :"10px 40px" , color : "white"} }>Sing up</button></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;