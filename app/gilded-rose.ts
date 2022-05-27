export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX = 50
const MIN = 0

export const increaseBy = (qty, count = 1) => {
    return qty === MAX ? qty : qty + count;
}

export const decreaseBy = (qty, count = 1) => {
  const val = qty - count > 0 ? qty - count : 0;
  return qty === MIN ? qty : val;
}


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item: Item) => {
      switch (item.name) {
        case "Aged Brie": {
          item.quality = increaseBy(
            item.quality,
            item.sellIn ? 1 : 0
          );
          item.sellIn--;
          break;
        }

        case "Conjured": {
          item.quality = decreaseBy(
            item.quality,
            item.sellIn ? 2 : 4
          );
          item.sellIn--;
          break;
        }
        
        case "Sulfuras, Hand of Ragnaros": {
          item.quality = 80;
          break;
        }

        case "Backstage passes to a TAFKAL80ETC concert": {
          let qualityIncrement = 1;
          if (item.sellIn <= 10) {
            qualityIncrement = 2;
          }
          if (item.sellIn <= 5) {
            qualityIncrement = 3;
          }

          item.quality =
            item.sellIn === 0
              ? 0
              : increaseBy(item.quality, qualityIncrement);
          item.sellIn--;
          break;
        }

        default: {
          item.quality = decreaseBy(
            item.quality,
            item.sellIn ? 1 : 2
          );
          item.sellIn--;
          break;
        }
      }
    });

    return this.items;
  }
}
