import styled from 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            background: string,
            text: string;
            error: string;
        };
        spacing: {
            xs: number,
            sm: number,
            md: number,
            lg: number,
        };
    }
}
