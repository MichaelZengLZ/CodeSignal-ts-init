function sum(a: number, b: number): number {
  return a + b;
}

test('test', () => {
  expect(sum(1, 2)).toBe(3);
});