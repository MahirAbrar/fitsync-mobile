import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function WorkoutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Workout</ThemedText>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="subtitle">Upcoming Workouts</ThemedText>
        <ThemedText>
          This is a placeholder for the upcoming workouts section. Your
          scheduled workouts will be displayed here.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText type="subtitle">Workout Tips</ThemedText>
        <ThemedText>
          This is a placeholder for workout tips. Helpful advice and strategies
          will be shared here.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    marginTop: 24,
    gap: 8,
  },
});
