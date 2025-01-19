import { ToolType, type BlockDataMap } from '@/types';
import defaultBlockImages from '@/config/defaultBlockImages';

export default function getDefaultBlockValue(tool: ToolType) {
  return {
    // Text block
    text: {
      type: ToolType.Text,
      data: {
        text: '',
      },
    },
    // Image block
    image: {
      type: ToolType.Image,
      data: {
        url: defaultBlockImages[0],
      },
    },
  }[tool] as BlockDataMap[ToolType];
}