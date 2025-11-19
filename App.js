import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(String(result));
      } catch (err) {
        setInput("Error");
      }
    } else if (value === "x²") {
      try {
        const num = eval(input || "0");
        setInput(String(num * num));
      } catch {
        setInput("Error");
      }
    } else if (value === "x³") {
      try {
        const num = eval(input || "0");
        setInput(String(num * num * num));
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ["C", "/", "*", "⌫"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", ".", "x²", "x³"]
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn, btnIndex) => {
              if (btn === "") return <View key={btnIndex} style={styles.button} />;

              return (
                <TouchableOpacity
                  key={btnIndex}
                  style={styles.button}
                  onPress={() => {
                    if (btn === "⌫") {
                      setInput(input.slice(0, -1));
                    } else {
                      handlePress(btn);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>{btn}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    justifyContent: "flex-start",
  },
  display: {
    height: "30%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    fontSize: 50,
    color: "#fff",
  },
  buttonsContainer: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#333",
    margin: 5,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
});
