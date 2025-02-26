import { HousePlug, Menu, Sheet } from "lucide-react";
import { Link } from "react-router-dom";
import { SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

function ShoppingHeader() {
    return <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <Link to="shop/home" className="flex items-center gap-2">
            <HousePlug className="h-6 w-6"/>
            <span className="font-bold">Ecommerce</span>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu />
                        <span className="sr-only">Toggle header menu</span>
                    </Button>

                </SheetTrigger>
            </Sheet>
        </div>

    </header>
}

export default ShoppingHeader;