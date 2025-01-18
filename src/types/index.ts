// Tools
export enum ToolType {
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
  [ToolType.Text]?: TextBlockData;
  [ToolType.Image]?: ImageBlockData;
};

export type ValidBlockData = TextBlockData | ImageBlockData;