
describe("Gilded Rose", function () {

  it("should Aged Brie increases by 1 in Quality and sell_in decrease by 1 after 1 day ", function () {
    items =[new Item("Aged Brie", 1, 1)];
    updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(2);
  });

  it("should Aged Brie increases by 1 in Quality and sell_in decrease by 1 after 1 day ", function () {
    items =[new Item("Aged Brie", -1, 1)];
    updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(3);
  });

  it("should Backstage passes increases by 1 in Quality and sell_in decrease by 1 after 1 day if sell_in > 10", function () {
    items =[new Item("Backstage passes to a TAFKAL80ETC concert", 11, 8)];
    updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sell_in).toEqual(10);
    expect(items[0].quality).toEqual(9);
  });

  it("should Backstage passes increases by 2 in Quality and sell_in decrease by 1 after 1 day if sell_in > 5 and < 10", function () {
    items =[new Item("Backstage passes to a TAFKAL80ETC concert", 9, 7)];
    updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sell_in).toEqual(8);
    expect(items[0].quality).toEqual(9);
  });

  it("should Backstage passes increases by 3 in Quality and sell_in decrease by 1 after 1 day if sell_in < 5", function () {
    items =[new Item("Backstage passes to a TAFKAL80ETC concert", 4, 5)];
    updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sell_in).toEqual(3);
    expect(items[0].quality).toEqual(8);
  });

  it("should Backstage passes drop to 0 in Quality and sell_in decrease by 1 after 1 day if sell_in 1", function () {
    items =[new Item("Backstage passes to a TAFKAL80ETC concert", 0, 2)];
    updateQuality();
    expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("should Sulfuras, Hand of Ragnaros never decreases in Quality and sell_in ", function () {
    items =[new Item("Sulfuras, Hand of Ragnaros", 1, 1)];
    updateQuality();
    expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("should Sulfuras, Hand of Ragnaros never decreases in Quality and sell_in ", function () {
    items =[new Item("Sulfuras, Hand of Ragnaros", 1, 1)];
    updateQuality();
    expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });


  it("should Elixir of the Mongoose never decreases in Quality and sell_in ", function () {
    items =[new Item("Elixir of the Mongoose", 1, 1)];
    updateQuality();
    expect(items[0].name).toEqual("Elixir of the Mongoose");
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(0);
  });

  it("should Elixir of the Mongoose decreases by 1 in Quality and sell_in ", function () {
    items =[new Item("Elixir of the Mongoose", -1, 5)];
    updateQuality();
    expect(items[0].name).toEqual("Elixir of the Mongoose");
    expect(items[0].sell_in).toEqual(-2);
    expect(items[0].quality).toEqual(3);
  });

});
