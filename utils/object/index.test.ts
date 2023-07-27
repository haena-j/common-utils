import object from ".";

describe("object utils", () => {
  describe("hasOwnProperty", () => {
    it("should return true when property exists", () => {
      expect(object.hasOwnProperty({ name: "John" }, "name")).toBe(true);
    });

    it("should return false when property does not exist", () => {
      expect(object.hasOwnProperty({ name: "John" }, "age")).toBe(false);
    });
  });

  describe("deepEqual", () => {
    it("should return true when two objects are deeply equal", () => {
      expect(
        object.deepEqual({ name: "John", age: 20 }, { name: "John", age: 20 })
      ).toBe(true);
    });

    it("should return false when two objects are not deeply equal", () => {
      expect(
        object.deepEqual({ name: "John", age: 20 }, { name: "John", age: 21 })
      ).toBe(false);
    });

    it("should return false when two objects have different number of properties", () => {
      expect(
        object.deepEqual(
          { name: "John", age: 20, gender: "male" },
          { name: "John", age: 20 }
        )
      ).toBe(false);
    });

    it("should return false when the objects do not have identical properties", () => {
      expect(
        object.deepEqual(
          { name: "John", age: 20, gender: "male" },
          { name: "John", age: 20, address: "123 Main St"}
        )
      ).toBe(false);
    });
  });

  describe("mergeUniqueObjects", () => {
    it("should return merged array without duplicates", () => {
      const baseObjects = [
        { name: "John", age: 20 },
        { name: "Anna", age: 22 },
      ];
      const newObjects = [
        { name: "John", age: 20 },
        { name: "Steve", age: 25 },
      ];
      expect(object.mergeUniqueObjects(baseObjects, newObjects)).toEqual([
        { name: "John", age: 20 },
        { name: "Anna", age: 22 },
        { name: "Steve", age: 25 },
      ]);
    });
  });
});
