const WorkoutForm = ({
  exerciseName,
  numberOfSets,
  numberOfReps,
  dayOfWeek,
  isFormValid,
  isEditing,
  onSubmit,
  onReset,
  onExerciseNameChange,
  onNumberOfSetsChange,
  onNumberOfRepsChange,
  onDayOfWeekChange
}) => {
  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 8, marginBottom: 16 }}>
      <label>
        Nombre del ejercicio
        <input
          value={exerciseName}
          onChange={onExerciseNameChange}
          placeholder="Ej. Sentadilla"
        />
      </label>

      <label>
        Número de sets
        <input type="number" min="1" value={numberOfSets} onChange={onNumberOfSetsChange} />
      </label>

      <label>
        Número de reps
        <input type="number" min="1" value={numberOfReps} onChange={onNumberOfRepsChange} />
      </label>

      <label>
        Día de la semana
        <select value={dayOfWeek} onChange={onDayOfWeekChange}>
          <option>Lunes</option><option>Martes</option><option>Miércoles</option>
          <option>Jueves</option><option>Viernes</option><option>Sábado</option><option>Domingo</option>
        </select>
      </label>

      {!isFormValid && (
        <p style={{ color: "crimson" }}>
          Revisa: nombre requerido y sets/reps deben ser ≥ 1.
        </p>
      )}

      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit">{isEditing ? "Guardar cambios" : "Agregar"}</button>
        <button type="button" onClick={onReset}>Resetear</button>
      </div>
    </form>
  );
};

export default WorkoutForm;
