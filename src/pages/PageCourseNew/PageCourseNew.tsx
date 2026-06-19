import { CoursesPageHeader } from "../../components/CoursesPageHeader/CoursesPageHeader.tsx";
import { CourseEditForm } from "../../components/CourseEditForm/CourseEditForm.tsx";
import { useCourseCreateMutation } from "../../fetchers/useCourseCreateMutation.ts";
import { useNavigate } from "react-router";

export function PageCourseNew() {
    const navigate = useNavigate();
    const courseCreateMutation = useCourseCreateMutation({
        onSuccess: (newCourse) => {
            navigate(`/courses/${newCourse.id}`);
        },
    });

    const onSubmit = (newCourse: Course) => {
        courseCreateMutation.mutate(newCourse);
    };

    return (
        <div>
            <CoursesPageHeader />
            <CourseEditForm onSubmit={onSubmit} />
        </div>
    );
}
