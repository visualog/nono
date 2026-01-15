import { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Spacing, BorderRadius } from '../constants/Styles';
import { getQuestionsByCategory } from '../data/questions';
import { Question, QuestionOption } from '../types';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export default function QuestionScreen() {
    const { categoryId, categoryName } = useLocalSearchParams<{
        categoryId: string;
        categoryName: string;
    }>();
    const router = useRouter();
    const theme = useColorScheme() ?? 'light';
    const colors = Colors[theme];

    const questions = getQuestionsByCategory(categoryId || '');
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, QuestionOption>>({});

    const currentQuestion: Question | undefined = questions[currentStep];
    const progress = questions.length > 0 ? ((currentStep + 1) / questions.length) * 100 : 0;

    const handleOptionSelect = (option: QuestionOption) => {
        if (!currentQuestion) return;

        setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: option,
        }));

        // 마지막 질문이면 결과 화면으로
        if (currentStep >= questions.length - 1) {
            router.push({
                pathname: '/result',
                params: {
                    categoryId,
                    categoryName,
                    answers: JSON.stringify({ ...answers, [currentQuestion.id]: option }),
                },
            });
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        } else {
            router.back();
        }
    };

    if (!currentQuestion) {
        return (
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ThemedText>카테고리에 질문이 없습니다.</ThemedText>
                <Button title="돌아가기" onPress={() => router.back()} style={{ marginTop: Spacing.m }} />
            </ThemedView>
        );
    }

    return (
        <ThemedView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <ThemedView style={styles.header}>
                    <Pressable onPress={handleBack} style={styles.backButton}>
                        <ThemedText style={{ fontSize: 24 }}>←</ThemedText>
                    </Pressable>
                    <ThemedText type="defaultSemiBold">{categoryName}</ThemedText>
                    <ThemedText type="caption">
                        {currentStep + 1} / {questions.length}
                    </ThemedText>
                </ThemedView>

                {/* Progress Bar */}
                <View style={styles.progressContainer}>
                    <View
                        style={[
                            styles.progressBar,
                            { width: `${progress}%`, backgroundColor: colors.primary },
                        ]}
                    />
                </View>

                {/* Question */}
                <ThemedView style={styles.questionContainer}>
                    <ThemedText type="subtitle" style={styles.questionText}>
                        {currentQuestion.text}
                    </ThemedText>
                </ThemedView>

                {/* Options */}
                <ThemedView style={styles.optionsContainer}>
                    {currentQuestion.options.map((option) => (
                        <Pressable
                            key={option.id}
                            onPress={() => handleOptionSelect(option)}
                            style={({ pressed }) => [pressed && { opacity: 0.8 }]}
                        >
                            <Card style={styles.optionCard} variant="outlined">
                                <ThemedText type="defaultSemiBold">{option.text}</ThemedText>
                            </Card>
                        </Pressable>
                    ))}
                </ThemedView>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.m,
    },
    backButton: {
        padding: Spacing.xs,
    },
    progressContainer: {
        height: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: Spacing.m,
        borderRadius: BorderRadius.round,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: BorderRadius.round,
    },
    questionContainer: {
        padding: Spacing.l,
        paddingTop: Spacing.xl,
    },
    questionText: {
        textAlign: 'center',
        lineHeight: 32,
    },
    optionsContainer: {
        flex: 1,
        padding: Spacing.m,
        gap: Spacing.m,
    },
    optionCard: {
        paddingVertical: Spacing.l,
        alignItems: 'center',
    },
});
