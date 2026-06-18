import { PageHeader } from "../../components/PageHeader/PageHeader.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { ModalDeleteCard } from "../../components/ModalDeleteCard/ModalDeleteCard.tsx";
import { useCallback, useRef } from "react";
import { useCoursesContext } from "../../contexts/context.ts";

import "./PageCoursesList.css";

export function PageCoursesList() {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const { data: courses, courseDeleteMutation } = useCoursesContext();
    const deletingCourseIdRef = useRef<string | null>(null);

    const onDeleteClicked = useCallback((id: string) => {
        deletingCourseIdRef.current = id;
        const dialog = modalRef.current;

        if (dialog) {
            dialog.showModal();
        }
    }, []);

    const onDialogClose = useCallback(() => {
        const dialog = modalRef.current;

        if (dialog) {
            dialog.close();
        }
    }, []);

    const onConfirm = useCallback(() => {
        const courseId = deletingCourseIdRef.current;
        if (courseId) {
            courseDeleteMutation.mutate(courseId);
        }

        const dialog = modalRef.current;
        if (dialog) {
            dialog.close();
        }
    }, [courseDeleteMutation]);

    return (
        <div className="page-courses-list">
            <PageHeader title="Courses" subtitle="Browse and add golf courses" />
            <PageWrapper>
                <div className="page-courses-list__actions">
                    <Button href="/courses/new" visualType="primary">
                        Create a course
                    </Button>
                </div>
                <div className="page-courses-list__cards">
                    {courses && courses.length > 0 ? (
                        courses.map((course) => (
                            <Card
                                {...course}
                                key={course.id}
                                href={`/courses/${course.id}`}
                                onDeleteClicked={onDeleteClicked}
                            />
                        ))
                    ) : (
                        <p>No courses found</p>
                    )}
                </div>
            </PageWrapper>

            <ModalDeleteCard modalRef={modalRef} onClose={onDialogClose} onConfirm={onConfirm} />
        </div>
    );
}
