// Tools
export const enum ToolType {
  Text = 'text',
  Image = 'image',
}

// Blocks
export interface TextBlockData {
  type: ToolType.Text,
  data: {
    text: string,
  },
}

export interface ImageBlockData {
  type: ToolType.Image,
  data: {
    url: string,
  },
}

export type BlockDataMap = {
  text?: TextBlockData;
  image?: ImageBlockData;
};

export type ValidBlockData = TextBlockData | ImageBlockData;