type CourseStaffProps = {
    name: string;
    title: string;
    rating: number;
}

export function CourseStaff({ name, title, rating }: CourseStaffProps) {
    return (
        <div style={{ padding: "0.25rem", margin: "1rem", backgroundColor: "lightsteelblue" }}>
            <h3> {name}</h3>
            <h4>{title}</h4>
            <p>{rating}/100</p>
        </div>
    )
}