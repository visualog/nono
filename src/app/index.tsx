import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Spacing } from '../constants/Styles';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export default function HomeScreen() {
    const theme = useColorScheme() ?? 'light';

    return (
        <ThemedView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <ThemedView style={styles.header}>
                        <ThemedText type="title">Design System</ThemedText>
                        <ThemedText type="subtitle">Foundation & Components</ThemedText>
                    </ThemedView>

                    <ThemedView style={styles.section}>
                        <ThemedText type="defaultSemiBold">Typography</ThemedText>
                        <ThemedText type="title">Title XL</ThemedText>
                        <ThemedText type="subtitle">Subtitle L</ThemedText>
                        <ThemedText type="default">Default Body M</ThemedText>
                        <ThemedText type="defaultSemiBold">SemiBold Body M</ThemedText>
                        <ThemedText type="caption">Caption S</ThemedText>
                    </ThemedView>

                    <ThemedView style={styles.section}>
                        <ThemedText type="defaultSemiBold" style={{ marginBottom: Spacing.s }}>Buttons</ThemedText>
                        <Button title="Primary Button" onPress={() => { }} style={{ marginBottom: Spacing.s }} />
                        <Button title="Secondary Button" variant="secondary" onPress={() => { }} style={{ marginBottom: Spacing.s }} />
                        <Button title="Outline Button" variant="outline" onPress={() => { }} style={{ marginBottom: Spacing.s }} />
                        <Button title="Loading Button" loading onPress={() => { }} style={{ marginBottom: Spacing.s }} />
                        <Button title="Small Button" size="s" onPress={() => { }} style={{ marginBottom: Spacing.s }} />
                    </ThemedView>

                    <ThemedView style={styles.section}>
                        <ThemedText type="defaultSemiBold" style={{ marginBottom: Spacing.s }}>Cards</ThemedText>
                        <Card style={{ marginBottom: Spacing.m }}>
                            <ThemedText type="defaultSemiBold">Elevated Card</ThemedText>
                            <ThemedText>This is a default elevated card.</ThemedText>
                        </Card>

                        <Card variant="outlined" style={{ marginBottom: Spacing.m }}>
                            <ThemedText type="defaultSemiBold">Outlined Card</ThemedText>
                            <ThemedText>This is an outlined card.</ThemedText>
                        </Card>

                        <Card variant="flat" style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#2a2a2a' }}>
                            <ThemedText type="defaultSemiBold">Flat Card</ThemedText>
                            <ThemedText>This is a flat custom card.</ThemedText>
                        </Card>
                    </ThemedView>

                </ScrollView>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: Spacing.m,
    },
    header: {
        marginBottom: Spacing.xl,
    },
    section: {
        gap: Spacing.xs,
        marginBottom: Spacing.xl,
    },
});
