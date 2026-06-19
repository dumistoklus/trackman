import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCourse } from "../api/api.ts";
import { QUERY_KEY_COURSES } from "./const.ts";

export function useCourseCreateMutation({
    onSuccess,
}: { onSuccess?: (newCourse: Course) => void } = {}) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newCourse: Course) => {
            const createdCourse = await addCourse(newCourse);
            await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_COURSES] });

            return createdCourse;
        },
        onSuccess,
    });
}
