import { describe, expect, it } from "vitest";
import bla from ".";

describe("Teste Inicial", () => {
  it("Teste 1", () => {
    const result = bla();

    expect(result).not.toBeTruthy();
  });
});
