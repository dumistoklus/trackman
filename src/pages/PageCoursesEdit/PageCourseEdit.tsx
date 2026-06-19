import { CoursesPageHeader } from "../../components/CoursesPageHeader/CoursesPageHeader.tsx";
import { CourseEditForm } from "../../components/CourseEditForm/CourseEditForm.tsx";
import { useParams } from "react-router";
import { useCourseItemQuery } from "../../fetchers/useCourseItemQuery.ts";
import { useCourseEditMutation } from "../../fetchers/useCourseEditMutation.ts";
import { ErrorState } from "../../components/ErrorState/ErrorState.tsx";

export function PageCoursesEdit() {
    const params = useParams();
    const id = params.id || "";
    const courseEditMutation = useCourseEditMutation();
    const { data: course, isFetched, isError } = useCourseItemQuery(id);

    const onSubmit = (editedCourse: Course) => {
        courseEditMutation.mutate(editedCourse);
    };

    return (
        <div>
            <CoursesPageHeader />

            {isFetched && !isError ? (
                <CourseEditForm courseData={course} onSubmit={onSubmit} key={course?.id} />
            ) : isError ? (
                <ErrorState message="Error loading course data" />
            ) : (
                <ErrorState message="Loading..." />
            )}
        </div>
    );
}
