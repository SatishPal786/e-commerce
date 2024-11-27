describe("number operations", () => {
  test("1 plus 1 should be equals to 2", () => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2);
  });
  test("5 plus 1 should not be equals to 2", () => {
    let a = 5;
    let b = 1;
    expect(a + b).not.toBe(2);
  });
});
// describe("number should be undefinded",()=>{
//      test()
// })
