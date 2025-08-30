import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export default function NavBar() {
  const { islogedIn, setIsLogedIn, userData, setUserData } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    setIsLogedIn(null);
    setUserData(null);
    navigate("/login");
  }

  return (
    <Navbar
      className="max-w-screen overflow-hidden bg-gray-200 shadow-blue-200 md:fixed top-0 left-0 right-0"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      
      <NavbarBrand>
        <Link to="/" className="font-bold italic text-blue-400">
          LINKED POSTS
        </Link>
      </NavbarBrand>

      {/* زرار التوجل في الموبايل */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* زرار login/logout في الديسكتوب */}
      <NavbarContent justify="end" className="hidden md:flex">
        {islogedIn ? (
          <>
            <NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex items-center gap-5">
<div className="flex items-center gap-3 cursor-pointer">
                    <span>{userData?.name}</span>
                    <img
                      src={userData?.photo}
                      alt="profile"
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                  
                  </div>
                     <Button variant="bordered" color="default" key="logout" className="text-red-600" onPress={logOut}>
                    Logout
                  </Button>
                  </div>
                  
                  
                </DropdownTrigger>
                <DropdownMenu aria-label="User menu">
                  <DropdownItem key="profile">
                    <NavLink to="/profile">My Posts</NavLink>
                  </DropdownItem>
                  <DropdownItem key="photo">
                    <NavLink to="/profile?tab=photo">Change Photo</NavLink>
                  </DropdownItem>
                  <DropdownItem key="password">
                    <NavLink to="/profile?tab=password">Change Password</NavLink>
                  </DropdownItem>
                  <DropdownItem key="logout" className="text-red-500" onClick={logOut}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Link to="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Link to="/register">Sign Up</Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      {/* المينيو في الموبايل */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </NavbarMenuItem>

        {islogedIn ? (
          <>
            <NavbarMenuItem>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                {userData?.name}
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <div className="cursor-pointer text-red-500" onClick={logOut}>
                Logout
              </div>
            </NavbarMenuItem>
          </>
        ) : (
          <>
            <NavbarMenuItem>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                Sign Up
              </Link>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
}


// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button,
// } from "@heroui/react";
// import { useContext, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";

// export default function NavBar() {
//   const { islogedIn, setIsLogedIn, userData, setUserData } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   function logOut() {
//     localStorage.removeItem("token");
//     setIsLogedIn(null);
//     setUserData(null);
//     navigate("/login");
//     setIsMenuOpen(false); // يقفل المينيو بعد اللوج أوت
//   }

//   return (
//     <Navbar
//       className="max-w-screen overflow-hidden bg-gray-200 shadow-blue-200 md:fixed top-0 left-0 right-0"
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       <NavbarBrand>
//         <Link to="/" className="font-bold italic text-blue-400">
//           LINKED POSTS
//         </Link>
//       </NavbarBrand>

//       {/* زرار التوجل في الموبايل */}
//       <NavbarContent className="md:hidden" justify="end">
//         <NavbarMenuToggle />
//       </NavbarContent>

//       {/* زرار login/logout في الديسكتوب */}
//       <NavbarContent justify="end" className="hidden md:flex">
//         {islogedIn ? (
//           <>
//             <NavbarItem>
//               <Dropdown placement="bottom-end">
//                 <DropdownTrigger>
//                   <div className="flex items-center gap-5 cursor-pointer">
//                     <div className="flex items-center gap-3">
//                       <span>{userData?.name}</span>
//                       <img
//                         src={userData?.photo}
//                         alt="profile"
//                         className="w-[40px] h-[40px] rounded-full object-cover"
//                       />
//                     </div>
//                     <Button
//                       variant="bordered"
//                       color="default"
//                       key="logout"
//                       className="text-red-600"
//                       onPress={logOut}
//                     >
//                       Logout
//                     </Button>
//                   </div>
//                 </DropdownTrigger>
//                 <DropdownMenu aria-label="User menu">
//                   <DropdownItem key="profile">
//                     <NavLink to="/profile">My Posts</NavLink>
//                   </DropdownItem>
//                   <DropdownItem key="photo">
//                     <NavLink to="/profile?tab=photo">Change Photo</NavLink>
//                   </DropdownItem>
//                   <DropdownItem key="password">
//                     <NavLink to="/profile?tab=password">Change Password</NavLink>
//                   </DropdownItem>
//                   <DropdownItem
//                     key="logout"
//                     className="text-red-500"
//                     onClick={logOut}
//                   >
//                     Logout
//                   </DropdownItem>
//                 </DropdownMenu>
//               </Dropdown>
//             </NavbarItem>
//           </>
//         ) : (
//           <>
//             <NavbarItem>
//               <Link to="/login">Login</Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Link to="/register">Sign Up</Link>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>

//       {/* المينيو في الموبايل */}
//       <NavbarMenu>
//         <NavbarMenuItem>
//           <Link to="/" onClick={() => setIsMenuOpen(false)}>
//             Home
//           </Link>
//         </NavbarMenuItem>

//         {islogedIn ? (
//           <>
//             <NavbarMenuItem>
//               <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
//                 {userData?.name}
//               </Link>
//             </NavbarMenuItem>
//             <NavbarMenuItem>
//               <div
//                 className="cursor-pointer text-red-500"
//                 onClick={logOut}
//               >
//                 Logout
//               </div>
//             </NavbarMenuItem>
//           </>
//         ) : (
//           <>
//             <NavbarMenuItem>
//               <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//                 Login
//               </Link>
//             </NavbarMenuItem>
//             <NavbarMenuItem>
//               <Link to="/register" onClick={() => setIsMenuOpen(false)}>
//                 Sign Up
//               </Link>
//             </NavbarMenuItem>
//           </>
//         )}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
