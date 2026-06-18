const LOCAL_STORAGE_COURSES_KEY = "courses";

const initialCards: Course[] = [
    {
        id: "3",
        title: "Pebble Beach Golf Links And King Charles Association",
        place: "California, US",
        difficulty: 4,
        par: "72",
        imageUrl: "/place1.webp",
    },
    {
        id: "4",
        title: "Albany",
        place: "California, US",
        difficulty: 4,
        par: "72",
        featured: true,
        imageUrl: "/place2.jpg",
    },
    {
        id: "5",
        title: "Hidden Canyon",
        place: "California, US",
        difficulty: 4,
        par: "72",
        imageUrl: "/place3.jpg",
    },
    {
        id: "6",
        title: "St. Andrews",
        place: "California, US",
        difficulty: 4,
        par: "72",
        imageUrl: "/place4.avif",
    },
    {
        id: "7",
        title: "Asserbo",
        place: "Copenhagen, Denmark",
        difficulty: 3,
        par: "72",
        imageUrl: "/place5.jpg",
    },
    {
        id: "8",
        title: "Asserbo",
        place: "Copenhagen, Denmark",
        difficulty: 3,
        par: "72",
        imageUrl: "/place6.jpg",
    },
];

(function initLocalStorage() {
    if (!localStorage.getItem(LOCAL_STORAGE_COURSES_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(initialCards));
    }
})();

export async function fetchCourses() {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);

    return coursesString ? JSON.parse(coursesString) : [];
}

export async function updateCourse(newCourse: Course) {
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

export async function deleteCourse(courseId: string) {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
    const courses: Course[] = coursesString ? JSON.parse(coursesString) : [];
    const newCourses = courses.filter((t) => t.id !== courseId);

    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(newCourses));
}

export async function addCourse(newCourse: Course) {
    const coursesString = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
    const courses: Course[] = coursesString ? JSON.parse(coursesString) : [];
    const newCourses = [...courses, newCourse];

    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(newCourses));

    return newCourse;
}
