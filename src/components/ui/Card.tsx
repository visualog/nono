import { ViewStyle, StyleProp } from 'react-native';
import { ThemedView } from './ThemedView';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Spacing, BorderRadius, GlobalStyles } from '../../constants/Styles';

interface CardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    variant?: 'elevated' | 'outlined' | 'flat';
    onPress?: () => void; // TODO: Implement pressable card if needed
}

export function Card({ children, style, variant = 'elevated' }: CardProps) {
    const theme = useColorScheme() ?? 'light';
    const colors = Colors[theme];

    const getBackgroundColor = () => {
        // In dark mode, card color is slightly lighter than background. Usually defined in Colors.card
        return colors.card;
    };

    const getBorder = () => {
        if (variant === 'outlined') {
            return {
                borderWidth: 1,
                borderColor: colors.border,
            };
        }
        return {};
    };

    const getShadow = () => {
        if (variant === 'elevated') {
            return GlobalStyles.shadow;
        }
        return {};
    };

    return (
        <ThemedView
            style={[
                {
                    backgroundColor: getBackgroundColor(),
                    borderRadius: BorderRadius.l,
                    padding: Spacing.m,
                    ...getBorder(),
                    ...getShadow(),
                },
                style,
            ]}
        >
            {children}
        </ThemedView>
    );
}
