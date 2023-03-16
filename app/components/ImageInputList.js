import { View, Text } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUri = [],
  onRemoveImage,
  OnAddImage,
}) {
  return (
    <View style={{ flexDirection: "row" }}>
      <ImageInput OnChangeImage={(uri) => OnAddImage(uri)} />
      {imageUri.map((uri) => (
        <ImageInput
          imageUri={uri}
          key={uri}
          OnChangeImage={() => onRemoveImage(uri)}
        />
      ))}
    </View>
  );
}
