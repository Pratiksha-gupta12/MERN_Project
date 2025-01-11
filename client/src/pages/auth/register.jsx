// import CommonForm from "@/components/common/form";
// import { registerFormControls } from "@/config";
// //import { registerUser } from "@/store/auth-slice";
// import axios from "axios";



// import { useState } from "react";
// //import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// const initialState = {
//     userName : '',
//     email : '',
//     password : '',

// };

// function AuthRegister() {
//     const [formData, setFormData] = useState(initialState);
//     // const navigate = useNavigate();
//     // const dispatch = useDispatch();
    

//     // function onSubmit(event){
//     //     event.preventDefault();
//     //     dispatch(registerUser(formData)).then((data)=> {
//     //         console.log(data);

//     //     });
        
//     // } 

//     const onSubmit = async (event) => {
//         event.preventDefault();
      
//         try {
//           const response = await axios.post('http://localhost:5000/api/auth/register', formData);
//           console.log(response);
//         } catch (error) {
//           console.error('Error during registration:', error);
//         }
//       };
      
//     console.log(formData);

    



//     return <div className="mx-auto w-full max-w-md space-y-6">
//         <div className="text-center">
//             <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
//             <p className="mt-2">Already have an account?</p>
// <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/login' >Login</Link>

//         </div>
//         <CommonForm
        
//         formControls={registerFormControls}
//         buttonText={'Sign Up'}
//         formData={formData}
//         setFormData={setFormData}
//         onSubmit={onSubmit}
        
//         />
//     </div>
// };

// export default AuthRegister;


import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config/index";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link,  } from "react-router-dom";


const initialState = {
    userName: "",
    email: "",
    password: "",
};


function AuthRegister() {


    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    //const navigate = useNavigate();


    function onSubmit(event) {
        event.preventDefault();
        dispatch(registerUser(formData)).then((data) => {
            console.log(data);
        }
    );



    }

    console.log(formData);



    return (
        <div className="mx-auto w-full max-w-md space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Create new Account
                </h1>
                <p className="mt-2">
                    Already have an account
                    <Link
                        className="font-medium ml-2 text-primary hover:underline"
                        to='/auth/login'
                    >
                        Login
                    </Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={"Sign Up"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default AuthRegister;
