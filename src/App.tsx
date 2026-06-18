import { Route, Routes } from "react-router";
import { PageCoursesList } from "./pages/PageCoursesList/PageCoursesList.tsx";
import { SiteHeader } from "./components/SiteHeader/SiteHeader.tsx";

function App() {
    return (
        <>
            <SiteHeader />

            <main>
                <Routes>
                    <Route path="/" element={<PageCoursesList />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
