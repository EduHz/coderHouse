import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  console.log(list.map((x) => x));

  const handleSubmit = () => {
    setList([...list, { text: item, checked: false }]);
    setItem("");
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleCheck = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  return (
    <View>
      <Text>Primera Lista Sin Ayudas</Text>
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          placeholder="Add item..."
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <Button title="Add" onPress={handleSubmit} />
      </View>
      {list.map((item, index) => (
        <View key={index}>
          <Text
            style={item.checked ? { textDecorationLine: "line-through" } : {}}
          >
            {item.text}
          </Text>
          <Button title="Delete" onPress={() => handleDelete(index)} />
          <Button title="Check" onPress={() => handleCheck(index)} />
        </View>
      ))}
    </View>
  );
}
