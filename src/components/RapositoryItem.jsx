import React from "react"
import { View, StyleSheet, Text } from "react-native"
import StyledText from "./StyledText.jsx"


const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText big bold>id: {props.id}</StyledText>
        <StyledText blue>Fullname: {props.fullName}</StyledText>
        <StyledText normal>Description: {props.description}</StyledText>
        <StyledText blue>Language: {props.language}</StyledText>
        <StyledText small>Starts: {props.stargazersCount}</StyledText>
        <StyledText small>Forks: {props.forksCount}</StyledText>
        <StyledText small>Review: {props.reviewCount}</StyledText>
        <StyledText small>Rating: {props.ratingAverage}</StyledText>
        <StyledText small>Rating: {props.ownerAvatarUrl}</StyledText>
    </View>
)


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
})

export default RepositoryItem