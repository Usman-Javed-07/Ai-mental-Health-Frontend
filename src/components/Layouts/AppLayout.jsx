import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import {Outlet} from "react-router-dom"

export const Layouts = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}