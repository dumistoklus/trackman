import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_COURSES } from "./const.ts";
import { fetchCourse } from "../api/api.ts";

export function useCourseItemQuery(id: string) {
    return useQuery({
        queryKey: [QUERY_KEY_COURSES, `course${id}`],
        queryFn: () => fetchCourse(id),
    });
}
