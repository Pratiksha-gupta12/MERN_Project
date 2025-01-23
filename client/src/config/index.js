import { BadgeCheck, LayoutDashboard, ShoppingBasket } from "lucide-react";

export const registerFormControls = [
{
    name : 'userName',
    label : 'User Name' , 
    placeholder : 'Enter your user name',
    componentType : 'input',
    type : 'text',
    
    
},

{
    name : 'email',
    label : 'Email' , 
    placeholder : 'Enter your email',
    componentType : 'input',
    type : 'email',
},

{
    name : 'password',
    label : 'password' , 
    placeholder : 'Enter your password',
    componentType : 'input',
    type : 'password',
    // autocomplete : 'password'
    
}
]

export const loginFormControls = [
 
    
    {
        name : 'email',
        label : 'Email' , 
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    
    {
        name : 'password',
        label : 'password' , 
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',
        // autocomplete : 'password'
    }
    ];


    export const adminSidebarMenuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            path: 'admin/dashboard'
            icon: <LayoutDashboard />
        },
        {
            id: 'products',
            label: 'Products',
            path: 'admin/products'
            icon: <ShoppingBasket/>
        },
        {
            id: 'orders',
            label: 'Orders',
            path: 'admin/orders'
            icon: <BadgeCheck/>
        },
    ]