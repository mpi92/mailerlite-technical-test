// Tools
export type TextToolType = 'text';
export type ImageToolType = 'image';
export type ToolType = TextToolType | ImageToolType;

// Blocks
export type TextBlockData = {
  type: TextToolType,
  data: {
    text: string,
  },
}
export type ImageBlockData = {
  type: ImageToolType,
  data: {
    url: string,
  },
}
export type BlockDataMap = {
  text?: TextBlockData;
  image?: ImageBlockData;
};
export type ResultPayload = {
  [K in ToolType]: BlockDataMap[K];
};