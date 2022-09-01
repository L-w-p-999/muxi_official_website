import { Navigate } from "react-router-dom";
import First from "../components/first/first";
import GroupIntro from "../pages/group";
import JoinUs from "../pages/join";
import ProductIntro from "../pages/product";
import MemberIntro from "../pages/member";

const routes = [
    {
        path:"",
        element:<First/>
    },
    {
        path:"/intro",
        element:<GroupIntro/>
    },
    {
        path:"/product",
        element:<ProductIntro/>
    },
    {
        path:"/member",
        element: <MemberIntro/>
    },
    {
        path:"/join",
        element:<JoinUs/>
    },
    {
        path:"/",
        element:<Navigate to=""/>
    }
]

export default routes