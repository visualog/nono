import React from 'react';
import { Pressable, StyleSheet, ActivityIndicator, ViewStyle, StyleProp } from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors } from '../../constants/Colors';
import { Spacing, BorderRadius } from '../../constants/Styles';
import { useColorScheme } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    style?: StyleProp<ViewStyle>;
    icon?: React.ReactNode;
}

export function Button({
    title,
    onPress,
    variant = 'primary',
    size = 'm',
    disabled = false,
    loading = false,
    style,
    icon,
}: ButtonProps) {
    const theme = useColorScheme() ?? 'light';
    const colors = Colors[theme];

    const getBackgroundColor = (pressed: boolean) => {
        if (disabled) return colors.border;

        switch (variant) {
            case 'primary':
                return pressed ? colors.primary + 'DD' : colors.primary; // slightly transparent on press
            case 'secondary':
                return pressed ? colors.secondary + 'DD' : colors.secondary;
            case 'outline':
            case 'ghost':
                return 'transparent';
            default:
                return colors.primary;
        }
    };

    const getTextColor = () => {
        if (disabled) return colors.icon;

        switch (variant) {
            case 'primary':
                return '#FFFFFF'; // Primary button text usually white
            case 'secondary':
                return theme === 'dark' ? '#000000' : '#FFFFFF';
            case 'outline':
            case 'ghost':
                return colors.primary;
            default:
                return '#FFFFFF';
        }
    };

    const getBorder = () => {
        if (variant === 'outline') {
            return {
                borderWidth: 1,
                borderColor: disabled ? colors.border : colors.primary,
            };
        }
        return {};
    };

    const paddingVertical = size === 's' ? 8 : size === 'm' ? 12 : 16;
    const paddingHorizontal = size === 's' ? 16 : size === 'm' ? 24 : 32;
    const fontSize = size === 's' ? 14 : size === 'm' ? 16 : 18;

    const textColor = getTextColor();

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            style={({ pressed }) => [
                {
                    backgroundColor: getBackgroundColor(pressed),
                    borderRadius: BorderRadius.l,
                    paddingVertical,
                    paddingHorizontal,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: disabled ? 0.6 : 1,
                    ...getBorder(),
                },
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={textColor} size="small" style={{ marginRight: 8 }} />
            ) : icon ? (
                <View style={{ marginRight: 8 }}>{icon}</View>
            ) : null}

            <ThemedText
                style={{
                    color: textColor,
                    fontSize,
                    fontWeight: '600',
                    textAlign: 'center',
                }}
            >
                {title}
            </ThemedText>
        </Pressable>
    );
}
