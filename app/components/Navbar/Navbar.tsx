'use client';
import Container from "../Container"
import Categories from "./Categories";
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu";
import SafeUser from "../../../app/types";
interface NavbarProps {
    currentUser?: SafeUser | null;
  }

const Navbar = ({ currentUser }) => {
    return (
        <div className="fixed w-full shadow-sm bg-white z-10">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-3">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    )
}

export default Navbar