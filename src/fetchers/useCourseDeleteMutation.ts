import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "../api/api.ts";
import { QUERY_KEY_COURSES } from "./const.ts";

export function useCourseDeleteMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (deletedCourseId: string) => {
            await deleteCourse(deletedCourseId);
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_COURSES] });
        },
    });
}
