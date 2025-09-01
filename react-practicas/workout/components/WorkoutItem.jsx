const WorkoutItem = ({ workout, onEdit, onDelete }) => {
  return (
    <li style={{ border: "1px solid #eee", padding: 8, borderRadius: 8 }}>
      <div><strong>{workout.exerciseName}</strong></div>
      <div>Sets: {workout.numberOfSets} — Reps: {workout.numberOfReps}</div>
      <div>Día: {workout.dayOfWeek}</div>

      <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </li>
  );
};

export default WorkoutItem;
