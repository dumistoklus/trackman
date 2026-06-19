import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../api/api.ts";
import { QUERY_KEY_COURSES } from "./const.ts";

export function useCourseListQuery() {
    return useQuery({
        queryKey: [QUERY_KEY_COURSES],
        queryFn: fetchCourses,
    });
}
