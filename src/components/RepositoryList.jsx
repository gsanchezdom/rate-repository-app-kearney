import React from "react";
import { FlatList, View, Text } from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItem from "./RapositoryItem.jsx";


const RepositoryList = () => {
    return (
        <FlatList
            data= {repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item: repo}) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
}

export default RepositoryList