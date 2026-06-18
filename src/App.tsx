import { Route, Routes } from "react-router";
import { PageCoursesList } from "./pages/PageCoursesList/PageCoursesList.tsx";
import { SiteHeader } from "./components/SiteHeader/SiteHeader.tsx";
import { CoursesProvider } from "./contexts/CoursesContext.tsx";

function App() {
    return (
        <CoursesProvider>
            <SiteHeader />

            <main>
                <Routes>
                    <Route path="/" element={<PageCoursesList />} />
                </Routes>
            </main>
        </CoursesProvider>
    );
}

export default App;
