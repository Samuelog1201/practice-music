import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

const AppWorkoutPlanner = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [numberOfSets, setNumberOfSets] = useState(3);
  const [numberOfReps, setNumberOfReps] = useState(10);
  const [dayOfWeek, setDayOfWeek] = useState("Lunes");
  const [editingId, setEditingId] = useState(null);

  const isFormValid =
    exerciseName.trim().length > 0 &&
    Number(numberOfSets) >= 1 &&
    Number(numberOfReps) >= 1;

  const resetForm = () => {
    setExerciseName("");
    setNumberOfSets(3);
    setNumberOfReps(10);
    setDayOfWeek("Lunes");
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    if (editingId) {
      setWorkouts(workouts.map((w) =>
        w.id === editingId
          ? { ...w, exerciseName: exerciseName.trim(), numberOfSets: Number(numberOfSets), numberOfReps: Number(numberOfReps), dayOfWeek }
          : w
      ));
    } else {
      const newWorkout = {
        id: crypto.randomUUID(),
        exerciseName: exerciseName.trim(),
        numberOfSets: Number(numberOfSets),
        numberOfReps: Number(numberOfReps),
        dayOfWeek,
      };
      setWorkouts([...workouts, newWorkout]);
    }
    resetForm();
  };

  const handleDelete = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
    if (editingId === id) resetForm();
  };

  const handleEdit = (workout) => {
    setEditingId(workout.id);
    setExerciseName(workout.exerciseName);
    setNumberOfSets(workout.numberOfSets);
    setNumberOfReps(workout.numberOfReps);
    setDayOfWeek(workout.dayOfWeek);
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <h1>Mini Workout Planner</h1>

      <p>Total de entrenamientos: <strong>{workouts.length}</strong></p>

      <WorkoutForm
        exerciseName={exerciseName}
        numberOfSets={numberOfSets}
        numberOfReps={numberOfReps}
        dayOfWeek={dayOfWeek}
        isFormValid={isFormValid}
        isEditing={Boolean(editingId)}
        onSubmit={handleSubmit}
        onReset={resetForm}
        onExerciseNameChange={(e) => setExerciseName(e.target.value)}
        onNumberOfSetsChange={(e) => setNumberOfSets(e.target.value)}
        onNumberOfRepsChange={(e) => setNumberOfReps(e.target.value)}
        onDayOfWeekChange={(e) => setDayOfWeek(e.target.value)}
      />

      <WorkoutList
        workouts={workouts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </main>
  );
};

export default AppWorkoutPlanner;
