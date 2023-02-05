import React, { useState } from "react";
import { Text } from "react-native";
import styles from './styles'

const Title = (props) => {
    const [stateText, setText] = useState(props.text);

    const onTextPress = () => {
        setText('updated state');
    };

    return (
        <Text style={styles.title} onPress={onTextPress}>{ stateText }</Text>
    );
};

export default React.memo(Title);