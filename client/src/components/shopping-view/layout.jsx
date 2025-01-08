import { Outlet } from "react-router-dom";
import  ShoppingHeader  from "./header";

function ShoppingLayout() {
    return (
        <div className=" flex flex-col bg-white overflow-hidden min-h-screen">
            {/* common header */}
            <ShoppingHeader/>
            <main className=" flex flex-col w-full ">
                <Outlet/>
                {/* Outlet is mainly used because we want to render the child component */}
                
            </main>
        </div>
    );
}

export default ShoppingLayout;