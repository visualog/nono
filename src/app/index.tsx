import { StyleSheet, FlatList, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ThemedText } from '../components/ui/ThemedText';
import { ThemedView } from '../components/ui/ThemedView';
import { Card } from '../components/ui/Card';
import { Spacing, FontSize } from '../constants/Styles';
import { categories } from '../data/categories';
import { Category } from '../types';

export default function HomeScreen() {
    const router = useRouter();

    const handleCategoryPress = (category: Category) => {
        router.push({
            pathname: '/question',
            params: { categoryId: category.id, categoryName: category.name },
        });
    };

    const renderCategory = ({ item }: { item: Category }) => (
        <Pressable
            onPress={() => handleCategoryPress(item)}
            style={({ pressed }) => [
                styles.categoryItem,
                pressed && styles.categoryItemPressed,
            ]}
        >
            <Card style={styles.categoryCard}>
                <ThemedText style={styles.categoryIcon}>{item.icon}</ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.categoryName}>
                    {item.name}
                </ThemedText>
                <ThemedText type="caption" style={styles.categoryDescription}>
                    {item.description}
                </ThemedText>
            </Card>
        </Pressable>
    );

    return (
        <ThemedView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ThemedView style={styles.header}>
                    <ThemedText type="title">뭘 살까? 🤔</ThemedText>
                    <ThemedText type="caption" style={styles.subtitle}>
                        고민되는 제품을 선택하세요
                    </ThemedText>
                </ThemedView>

                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={styles.row}
                />
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: Spacing.m,
        paddingBottom: Spacing.s,
    },
    subtitle: {
        marginTop: Spacing.xs,
    },
    listContent: {
        padding: Spacing.s,
    },
    row: {
        justifyContent: 'space-between',
    },
    categoryItem: {
        width: '48%',
        marginBottom: Spacing.m,
    },
    categoryItemPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    categoryCard: {
        alignItems: 'center',
        paddingVertical: Spacing.l,
    },
    categoryIcon: {
        fontSize: 48,
        marginBottom: Spacing.s,
    },
    categoryName: {
        fontSize: FontSize.m,
        textAlign: 'center',
    },
    categoryDescription: {
        textAlign: 'center',
        marginTop: Spacing.xs,
    },
});
