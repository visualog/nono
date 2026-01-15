import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '../../hooks/useThemeColor';
import { FontSize } from '../../constants/Styles';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                type === 'caption' ? styles.caption : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: FontSize.m,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: FontSize.m,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: FontSize.xxl,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: FontSize.l,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: FontSize.m,
        color: '#0a7ea4',
    },
    caption: {
        fontSize: FontSize.s,
        lineHeight: 20,
        opacity: 0.7,
    },
});
