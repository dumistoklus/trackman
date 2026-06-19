import { useState } from "react";
import { FormInput } from "../FormInput/FormInput.tsx";
import { Button } from "../Button/Button.tsx";
import { PageWrapper } from "../PageWrapper/PageWrapper.tsx";
import { FormHeader } from "../FormHeader/FormHeader.tsx";

import "./CourseEditForm.css";
import { FormTextarea } from "../FormTextarea/FormTextarea.tsx";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox.tsx";
import { FormImageUploader } from "../FormImageUploader/FormImageUploader.tsx";
import { Card } from "../Card/Card.tsx";
import { FormSelect, type SelectOption } from "../FormSelect/FormSelect.tsx";

type Props = {
    courseData?: Course;
    onSubmit: (data: Course) => void;
};

const DEFAULT_COURSE_DATA: Course = {
    difficulty: 0,
    id: "",
    par: "",
    country: "",
    city: "",
    title: "",
    imageUrl: "",
    featured: false,
    description: "",
};

const difficulties: SelectOption[] = [
    { value: "1", title: "1" },
    { value: "2", title: "2" },
    { value: "3", title: "3" },
    { value: "4", title: "4" },
    { value: "5", title: "5" },
];

const countries: SelectOption[] = [
    { value: "Argentina", title: "Argentina" },
    { value: "Australia", title: "Australia" },
    { value: "Austria", title: "Austria" },
    { value: "Belgium", title: "Belgium" },
    { value: "Brazil", title: "Brazil" },
    { value: "Canada", title: "Canada" },
    { value: "China", title: "China" },
    { value: "Denmark", title: "Denmark" },
    { value: "Finland", title: "Finland" },
    { value: "France", title: "France" },
    { value: "Germany", title: "Germany" },
    { value: "India", title: "India" },
    { value: "Ireland", title: "Ireland" },
    { value: "Italy", title: "Italy" },
    { value: "Japan", title: "Japan" },
    { value: "Mexico", title: "Mexico" },
    { value: "Netherlands", title: "Netherlands" },
    { value: "Norway", title: "Norway" },
    { value: "Portugal", title: "Portugal" },
    { value: "Scotland", title: "Scotland" },
    { value: "South Africa", title: "South Africa" },
    { value: "South Korea", title: "South Korea" },
    { value: "Spain", title: "Spain" },
    { value: "Sweden", title: "Sweden" },
    { value: "Switzerland", title: "Switzerland" },
    { value: "United Kingdom", title: "United Kingdom" },
    { value: "United States", title: "United States" },
    { value: "New Zealand", title: "New Zealand" },
];

export function CourseEditForm({ courseData, onSubmit }: Props) {
    const [course, setCourse] = useState<Course>(courseData || DEFAULT_COURSE_DATA);

    return (
        <form
            className="course-edit-form"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(course);
            }}
        >
            <div className="course-edit-form__floating-controls">
                <div className="course-edit-form__floating-inner">
                    <Button visualType="primary" type="submit">
                        {courseData ? "Save" : "Create"}
                    </Button>
                </div>
            </div>

            <PageWrapper className="course-edit-form__wrapper">
                <div className="course-edit-form__form">
                    <FormHeader
                        title="Course details"
                        subtitle="Review the information and make changes if necessary."
                    />
                    <div className="course-edit-form__grid">
                        <FormInput
                            value={course.title}
                            onChange={(e) =>
                                setCourse((course) => ({ ...course, title: e.target.value }))
                            }
                            placeholder="Title*"
                            name="title"
                        />
                        <FormSelect
                            value={course.difficulty}
                            onChange={(e) => {
                                const value = e.target.value;

                                if (value !== "default") {
                                    setCourse((course) => ({
                                        ...course,
                                        difficulty: Number(value),
                                    }));
                                }
                            }}
                            options={difficulties}
                            label="Difficulty*"
                            name="difficulty"
                        />
                        <FormTextarea
                            className="course-edit-form__grid-wide"
                            value={course.description}
                            onChange={(e) =>
                                setCourse((course) => ({ ...course, description: e.target.value }))
                            }
                            placeholder="Course description*"
                            name="description"
                        />
                        <FormInput
                            value={course.par}
                            onChange={(e) =>
                                setCourse((course) => ({ ...course, par: e.target.value }))
                            }
                            placeholder="Par*"
                            name="par"
                        />
                        <div className="course-edit-form__grid-spacer" />
                        <FormCheckbox
                            checked={Boolean(course.featured)}
                            onChange={(e) =>
                                setCourse((course) => ({ ...course, featured: e.target.checked }))
                            }
                            label="Featured course"
                            name="featured"
                        />
                    </div>

                    <FormHeader title="Location" />
                    <div className="course-edit-form__grid">
                        <FormInput
                            value={course.city}
                            onChange={(e) =>
                                setCourse((course) => ({ ...course, city: e.target.value }))
                            }
                            placeholder="City*"
                            name="city"
                        />

                        <FormSelect
                            value={course.country}
                            onChange={(e) => {
                                const value = e.target.value;

                                if (value !== "default") {
                                    setCourse((course) => ({
                                        ...course,
                                        country: e.target.value,
                                    }));
                                }
                            }}
                            options={countries}
                            label="Country*"
                            name="country"
                        />
                    </div>

                    <FormHeader title="Image" />

                    <FormImageUploader
                        value={course.imageUrl}
                        onChange={(imageUrl) => setCourse((course) => ({ ...course, imageUrl }))}
                    />
                </div>
                <div className="course-edit-form__preview">
                    <div className="course-edit-form__preview-container">
                        <Card
                            city={course.city}
                            country={course.country}
                            description={course.description}
                            difficulty={course.difficulty}
                            id={course.id}
                            par={course.par}
                            title={course.title}
                            imageUrl={course.imageUrl}
                            featured={course.featured}
                        />
                    </div>
                </div>
            </PageWrapper>
        </form>
    );
}
