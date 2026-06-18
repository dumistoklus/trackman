import { createContext, useContext } from "react";
import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";

export type CoursesContext = UseQueryResult<Course[]> & {
    courseEditMutation: UseMutationResult<Course, Error, Course>;
    courseAddMutation: UseMutationResult<Course, Error, Course>;
    courseDeleteMutation: UseMutationResult<void, Error, string>;
};

const initialContextData = {
    data: [] as Course[],
} as CoursesContext;

export const CoursesDataContext = createContext<CoursesContext>(initialContextData);

export function useCoursesContext() {
    return useContext(CoursesDataContext);
}
