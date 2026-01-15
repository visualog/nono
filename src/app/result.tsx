import { StyleSheet, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Spacing, FontSize } from '../constants/Styles';
import { QuestionOption } from '../types';

// 임시 추천 결과 (나중에 실제 매칭 로직으로 교체)
const mockResults: Record<string, { name: string; brand: string; price: string; reason: string }> = {
    induction: {
        name: '쿠쿠 CIR-S10FW',
        brand: '쿠쿠',
        price: '89,000원',
        reason: '1인 가구에 딱 맞는 화력과 가격!',
    },
    laptop: {
        name: 'MacBook Air M3',
        brand: 'Apple',
        price: '1,390,000원',
        reason: '가벼우면서도 개발/업무에 최적화!',
    },
    airfryer: {
        name: '필립스 XXL HD9650',
        brand: '필립스',
        price: '299,000원',
        reason: '대용량에 고른 열 분배!',
    },
    tv: {
        name: 'LG OLED55C3',
        brand: 'LG',
        price: '1,890,000원',
        reason: 'OLED 화질의 정점!',
    },
    'robot-cleaner': {
        name: '로보락 S8 Pro Ultra',
        brand: '로보락',
        price: '1,499,000원',
        reason: '올인원 청소 솔루션!',
    },
};

export default function ResultScreen() {
    const { categoryId, categoryName, answers } = useLocalSearchParams<{
        categoryId: string;
        categoryName: string;
        answers: string;
    }>();
    const router = useRouter();

    const parsedAnswers: Record<string, QuestionOption> = answers ? JSON.parse(answers) : {};
    const result = mockResults[categoryId || 'induction'];

    const handleRestart = () => {
        router.replace('/');
    };

    const handleSearch = () => {
        // 네이버 쇼핑 검색으로 연결 (예시)
        const query = encodeURIComponent(result.name);
        Linking.openURL(`https://search.shopping.naver.com/search/all?query=${query}`);
    };

    return (
        <ThemedView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <ThemedView style={styles.header}>
                        <ThemedText style={styles.emoji}>🎉</ThemedText>
                        <ThemedText type="title">추천 완료!</ThemedText>
                        <ThemedText type="caption">{categoryName} 추천 결과</ThemedText>
                    </ThemedView>

                    <Card style={styles.resultCard}>
                        <ThemedText type="caption" style={styles.brand}>
                            {result.brand}
                        </ThemedText>
                        <ThemedText type="subtitle" style={styles.productName}>
                            {result.name}
                        </ThemedText>
                        <ThemedText type="title" style={styles.price}>
                            {result.price}
                        </ThemedText>
                        <ThemedText style={styles.reason}>{result.reason}</ThemedText>
                    </Card>

                    <ThemedView style={styles.answersSection}>
                        <ThemedText type="defaultSemiBold">선택하신 답변</ThemedText>
                        {Object.values(parsedAnswers).map((answer, index) => (
                            <ThemedText key={index} type="caption" style={styles.answerItem}>
                                • {answer.text}
                            </ThemedText>
                        ))}
                    </ThemedView>

                    <ThemedView style={styles.buttonsContainer}>
                        <Button
                            title="최저가 검색하기"
                            onPress={handleSearch}
                            style={styles.primaryButton}
                        />
                        <Button
                            title="다시 시작하기"
                            variant="outline"
                            onPress={handleRestart}
                            style={styles.secondaryButton}
                        />
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
        alignItems: 'center',
        marginBottom: Spacing.xl,
        marginTop: Spacing.l,
    },
    emoji: {
        fontSize: 64,
        marginBottom: Spacing.s,
    },
    resultCard: {
        alignItems: 'center',
        paddingVertical: Spacing.xl,
        marginBottom: Spacing.l,
    },
    brand: {
        marginBottom: Spacing.xs,
    },
    productName: {
        textAlign: 'center',
        marginBottom: Spacing.s,
    },
    price: {
        marginBottom: Spacing.m,
    },
    reason: {
        textAlign: 'center',
        opacity: 0.8,
    },
    answersSection: {
        marginBottom: Spacing.xl,
    },
    answerItem: {
        marginTop: Spacing.xs,
        marginLeft: Spacing.s,
    },
    buttonsContainer: {
        gap: Spacing.m,
    },
    primaryButton: {
        width: '100%',
    },
    secondaryButton: {
        width: '100%',
    },
});
