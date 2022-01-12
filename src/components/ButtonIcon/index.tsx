import React from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgProps } from 'react-native-svg';

type Props = RectButtonProps & {
    icon: React.FC<SvgProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: Props) {
    return (
        <RectButton {...rest}>
            <MaterialCommunityIcons
                name='plus'
                color='white'
                size={50}
            />
        </RectButton>
    );
}