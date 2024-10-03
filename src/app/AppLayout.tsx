import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        // <AppHeader/>
        <main className="app-main">
            <Outlet/>
        </main>
        // <AppFooter/>
    );
}