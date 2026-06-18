import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCourse, deleteCourse, fetchCourses, updateCourse } from "../api/api.ts";
import * as React from "react";
import { CoursesDataContext } from "./context.ts";

const QUERY_KEY_COURSES = "COURSES";

export function CoursesProvider({ children }: { children: React.ReactNode }) {
    const queryClient = useQueryClient();

    const coursesQuery = useQuery({
        queryKey: [QUERY_KEY_COURSES],
        queryFn: fetchCourses,
    });

    const courseEditMutation = useMutation({
        mutationFn: async (editedCourse: Course) => {
            await updateCourse(editedCourse);
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_COURSES] });

            return editedCourse;
        },
    });

    const courseAddMutation = useMutation({
        mutationFn: async (newCourse: Course) => {
            await addCourse(newCourse);
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_COURSES] });

            return newCourse;
        },
    });

    const courseDeleteMutation = useMutation({
        mutationFn: async (deletedCourseId: string) => {
            await deleteCourse(deletedCourseId);
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_COURSES] });
        },
    });

    const fullContext = {
        ...coursesQuery,
        courseEditMutation,
        courseAddMutation,
        courseDeleteMutation,
    };

    return <CoursesDataContext value={fullContext}>{children}</CoursesDataContext>;
}
