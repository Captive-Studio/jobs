import { main } from './index.js';

describe(main, () => {
  test("dummy", () => {
    expect(typeof main).toBe('function');
  });
});