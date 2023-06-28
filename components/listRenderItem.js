import { Text } from "react-native";


export default function ListRenderItem({data}) {
    console.log(data)
    return(
        <Text>{data.title}</Text>
    )
}