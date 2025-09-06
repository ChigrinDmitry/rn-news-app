import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.primary};
    padding: ${props => props.theme.spacing.md}px;
    border-radius: 8px;
`;
