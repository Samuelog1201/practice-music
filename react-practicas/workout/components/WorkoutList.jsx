import WorkoutItem from "./WorkoutItem";

const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  if (workouts.length === 0) return <p>No hay entrenamientos todavía.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onEdit={() => onEdit(workout)}
          onDelete={() => onDelete(workout.id)}
        />
      ))}
    </ul>
  );
};

export default WorkoutList;
