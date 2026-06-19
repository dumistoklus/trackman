import { CoursesPageHeader } from "../../components/CoursesPageHeader/CoursesPageHeader.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper.tsx";
import { Card } from "../../components/Card/Card.tsx";
import { ModalDeleteCard } from "../../components/ModalDeleteCard/ModalDeleteCard.tsx";
import { useCallback, useRef } from "react";
import { useCourseListQuery } from "../../fetchers/useCourseListQuery.ts";
import { useCourseDeleteMutation } from "../../fetchers/useCourseDeleteMutation.ts";
import { ErrorState } from "../../components/ErrorState/ErrorState.tsx";

import "./PageCoursesList.css";

export function PageCoursesList() {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const { data: courses } = useCourseListQuery();
    const courseDeleteMutation = useCourseDeleteMutation();
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

    const sortedCourses = courses
        ? [...courses].sort((a, b) => {
              if (a.featured) {
                  return -1;
              } else if (b.featured) {
                  return 1;
              }

              return 0;
          })
        : [];

    return (
        <div className="page-courses-list">
            <CoursesPageHeader />
            <PageWrapper>
                <div className="page-courses-list__actions">
                    <Button href="/courses/new" visualType="primary">
                        Create a course
                    </Button>
                </div>

                {sortedCourses.length > 0 ? (
                    <div className="page-courses-list__cards">
                        {sortedCourses.map((course) => (
                            <Card
                                {...course}
                                key={course.id}
                                href={`/courses/${course.id}`}
                                onDeleteClicked={onDeleteClicked}
                            />
                        ))}
                    </div>
                ) : (
                    <ErrorState message="No courses found" />
                )}
            </PageWrapper>

            <ModalDeleteCard modalRef={modalRef} onClose={onDialogClose} onConfirm={onConfirm} />
        </div>
    );
}
