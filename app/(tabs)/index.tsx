import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Home</ThemedText>
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="subtitle">Workout History</ThemedText>
        <ThemedText>
          This is a placeholder for the workout history section. Your past
          workouts will be displayed here.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedText type="subtitle">Calendar</ThemedText>
        <ThemedText>
          This is a placeholder for the calendar view. Your workout schedule and
          history will be visualized here.
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
