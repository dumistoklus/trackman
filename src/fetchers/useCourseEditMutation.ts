import { updateCourse } from "../api/api.ts";
import { QUERY_KEY_COURSES } from "./const.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCourseEditMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (editedCourse: Course) => {
            await updateCourse(editedCourse);
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_COURSES] });

            return editedCourse;
        },
    });
}
