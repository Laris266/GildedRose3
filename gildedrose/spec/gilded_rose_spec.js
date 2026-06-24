describe("Gilded Rose", function() {

 /*  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("fixme");
  }); */

  it("normal item decreases quality and sellIn by 1", () =>
  {
    const item = new Item("+5 Dexterity Vest", 10, 20);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(9);
    expect(item.quality).toBe(19);
  });

  it("if sell by date has passed, quality degrades twice as fast", () => {
    const item = new Item("+5 Dexterity Vest", 0, 20);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(-1);
    expect(item.quality).toBe(18);
  });

  it("Aged Brie increases in quality the older it gets", () => {
    const item = new Item("Aged Brie", 2, 0);

    items = [item];
    update_quality();

    expect(item.sell_in).toBe(1);
    expect(item.quality).toBe(1);
  });

});
