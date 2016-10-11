# Gilded Rose

Originally created by Terry Hughes (http://twitter.com/#!/TerryHughes). This is a [fork of the JavaScript translation](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/js), with an updated version Jasmine and styled UI.

## Getting Started

1. Clone this repo
2. Open `index.html`, which has a very basic UI that outputs 2 days worth of inventory.
3. `SpecRunner.html` is a very basic test runner.

## Instructions

Adpated from https://github.com/NotMyself/GildedRose
### High Level Rules
- All items have a `sell_in` value which denotes the number of days we have to sell the item
- All items have a `quality` value which denotes how valuable the item is
- At the end of each day the system lowers both values for every item
- Once the sell by date has passed, `quality` degrades twice as fast
- The `quality` of an item is never negative

### Product-Specific Rules
- **Aged Brie** increases in `quality` the older it gets
- The `quality` of an item is never more than 50
- **Sulfuras**, being a legendary item, never has to be sold or decreases in `quality`
- **Backstage passes**, like **Aged Brie**, increases in `quality` as it's `sell_in` value approaches; `quality` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but `quality` drops to 0 after the concert

### Rules not yet implemented:
- "Conjured" items degrade in quality twice as fast as normal items

## Testing

### Command Line (recommended)

```
$ npm install
$ npm test
```

### Browser

Open `SpecRunner.html`
