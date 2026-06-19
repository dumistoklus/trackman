import { Route, Routes } from "react-router";
import { PageCoursesList } from "./pages/PageCoursesList/PageCoursesList.tsx";
import { SiteHeader } from "./components/SiteHeader/SiteHeader.tsx";
import { PageCoursesEdit } from "./pages/PageCoursesEdit/PageCourseEdit.tsx";
import { PageCourseNew } from "./pages/PageCourseNew/PageCourseNew.tsx";

function App() {
    return (
        <>
            <SiteHeader />

            <main>
                <Routes>
                    <Route path="/" element={<PageCoursesList />} />
                    <Route path="/courses/new" element={<PageCourseNew />} />
                    <Route path="/courses/:id" element={<PageCoursesEdit />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
