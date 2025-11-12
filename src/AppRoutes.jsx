import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage"
import Layout from "./layout/Layout";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<ChatPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes