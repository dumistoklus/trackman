const LOCAL_STORAGE_COURSES_KEY = "courses";

const initialCards: Course[] = [
    {
        id: "3",
        city: "California",
        country: "United States",
        description: "",
        difficulty: 4,
        imageUrl: "/place1.webp",
        par: "72",
        title: "Pebble Beach Golf Links And King Charles Association",
    },
    {
        id: "4",
        city: "California",
        country: "United States",
        description: "",
        difficulty: 4,
        featured: true,
        imageUrl: "/place2.jpg",
        par: "72",
        title: "Albany",
    },
    {
        id: "5",
        city: "California",
        country: "United States",
        description: "",
        difficulty: 4,
        imageUrl: "/place3.jpg",
        par: "72",
        title: "Hidden Canyon",
    },
    {
        id: "6",
        city: "California",
        country: "United States",
        description: "",
        difficulty: 4,
        imageUrl: "/place4.avif",
        par: "72",
        title: "St. Andrews",
    },
    {
        id: "7",
        city: "Copenhagen",
        country: "Denmark",
        description: "",
        difficulty: 3,
        imageUrl: "/place5.jpg",
        par: "72",
        title: "Asserbo",
    },
    {
        id: "8",
        city: "Copenhagen",
        country: "Denmark",
        description: "",
        difficulty: 3,
        imageUrl: "/place6.jpg",
        par: "72",
        title: "Asserbo",
    },
];

(function initLocalStorage() {
    if (!localStorage.getItem(LOCAL_STORAGE_COURSES_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(initialCards));
    }
})();

export async function fetchCourses(): Promise<Course[]> {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);

    return coursesString ? JSON.parse(coursesString) : [];
}

export async function fetchCourse(courseId: string): Promise<Course | undefined> {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
    const courses: Course[] = coursesString ? JSON.parse(coursesString) : [];

    return courses.find((t) => t.id === courseId);
}

export async function updateCourse(newCourse: Course): Promise<Course> {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
    const courses: Course[] = coursesString ? JSON.parse(coursesString) : [];
    const newCourses = courses.map((t) => {
        if (t.id === newCourse.id) {
            return newCourse;
        } else {
            return t;
        }
    });

    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(newCourses));

    return newCourse;
}

export async function deleteCourse(courseId: string): Promise<void> {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
    const courses: Course[] = coursesString ? JSON.parse(coursesString) : [];
    const newCourses = courses.filter((t) => t.id !== courseId);

    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(newCourses));
}

export async function addCourse(newCourse: Course): Promise<Course> {
    const newCourseWithId = { ...newCourse, id: crypto.randomUUID() };
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
    const courses: Course[] = coursesString ? JSON.parse(coursesString) : [];
    const newCourses = [...courses, newCourseWithId];

    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(newCourses));

    return newCourseWithId;
}
