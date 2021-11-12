import React from 'react'
import "./dashboard.css"
import Navbar from "../../components/dash/navbar/Navbar.js"

export default function Dashboard() {
    
    const [sidebarOpen, setSidebarOpen] = React.useState()

    const openSidebar = () => {
        setSidebarOpen(true)
    }

    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    return (
        <div className="containerDash">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}></Navbar>
            <h1>React Dashboard</h1>
        </div>
    )
}
