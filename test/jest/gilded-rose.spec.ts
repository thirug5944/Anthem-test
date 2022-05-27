import { expect } from "chai";
import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {

  it("Odinary product should decrease quality by 1 for every day", () => {
    const gildedRose = new GildedRose([new Item("odinary product", 1, 1)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(0);
    expect(inputItem.sellIn).to.equal(0);
  });

  it("Odinary product should update quality 2x as fast after expiry", () => {
    const gildedRose = new GildedRose([new Item("odinary product", 0, 100)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(98);
    expect(inputItem.sellIn).to.equal(-1);
  });

  it("Odinary product quality should never go pass 0", () => {
    const gildedRose = new GildedRose([new Item("odinary product", 0, 0)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(0);
    expect(inputItem.sellIn).to.equal(-1);
  });

  it("sulfuras should keep quality equal to 80", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 10, 5),
    ]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(80);
    expect(inputItem.sellIn).to.equal(10);
  });

  it("Conjured should decrease quality by 2 before expiry", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 1, 2)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(0);
    expect(inputItem.sellIn).to.equal(0);
  });

  it("Conjured quality should not go below 0", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 1)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(0);
    expect(inputItem.sellIn).to.equal(-1);
  });

  it("Conjured should decrease quality 4x as fast after expiry", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 6)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(2);
    expect(inputItem.sellIn).to.equal(-1);
  });

  it("Backstage quality should increase  by 1 when more than 10 days remaining for expiry", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1),
    ]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(2);
    expect(inputItem.sellIn).to.equal(10);
  });
  it("Backstage quality should increase by 2 when more than 5 days remaining", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 1),
    ]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(3);
    expect(inputItem.sellIn).to.equal(5);
  });
  it("Backstage should increase quality of backstage passes by 3 when less than 5 days remaining", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 1),
    ]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(4);
    expect(inputItem.sellIn).to.equal(2);
  });
  it("Backstage should set quality of backstage passes to 0 after concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(0);
    expect(inputItem.sellIn).to.equal(-1);
  });

  it("Aged Brie quality of Aged Brie goes up by 1", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 1)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(2);
    expect(inputItem.sellIn).to.equal(0);
  });
  it("Aged Brie should have max quality of 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 50)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(50);
    expect(inputItem.sellIn).to.equal(0);
  });
  it("Aged Brie should increase quality 2x id pass expiry", () => {
    const gildedRose = new GildedRose([new Item("", 0, 5)]);
    const inputItem = gildedRose.updateQuality()[0];
    expect(inputItem.quality).to.equal(3);
    expect(inputItem.sellIn).to.equal(-1);
  });
});
