import { describe, expect, test } from "vitest";

import { cn } from "../cn";

describe("cn", () => {
  test("should merge class names correctly", () => {
    const result = cn("class1", "class2", { class3: true }, [
      "class4",
      "class5",
    ]);
    expect(result).toBe("class1 class2 class3 class4 class5");
  });

  test("should handle empty inputs", () => {
    const result = cn();
    expect(result).toBe("");
  });

  test("should handle falsy inputs", () => {
    const result = cn("class1", null, undefined, false, 0);
    expect(result).toBe("class1");
  });
});
