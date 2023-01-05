---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/screens/[Navigation Folder]`,
- `src/navigation/[Navigation]/data.ts`

## Create your first React Page

Create a file at `src/pages/screens/Home/HomePage/index.tsx`:

```jsx title="src/pages/screens/Home/HomePage/index.tsx"
import React from "react";
import { Block, Text } from "@/components/common";

export default function HomeScreen() {
  return (
    <Block flex={1} bg="mainBgColor">
      <Text fc="white" fs="large" ff="popins">
        {t("hello", { name: "Your Name" })},
      </Text>
    </Block>
  );
}
```
