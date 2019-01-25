function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

const risePriceItems = [
  'Aged Brie',
  'Backstage passes',
]

const eliteItems = [
  'Sulfuras, Hand of Ragnaros',
]

const qualityMoreThanZero = (q) => (q > 0)
const qualityLessThanFifty = (q) => (q < 50)

const sellInLessThanEleven = (s) => (s < 11)
const sellInLessThanSix = (s) => (s < 6)
const sellInLessThanZero = (s) => (s < 0)
const sellInEqualZero = (s) => (s === 0)

const checkIsEliteItem = (item) => {
  const { name = '' } = item
  const isEliteItem = eliteItems.includes(name)
  return isEliteItem
}

const checkIsRisePricePasses = (item) => {
  const { name = '' } = item
  const isRisePriceItem = risePriceItems.some((risePriceCategoryName) => (name.includes(risePriceCategoryName)))
  return isRisePriceItem
}

const checkIsBackstagePasses = (item) => {
  const { name = '' } = item
  const isBackstagePasses = name.includes('Backstage passes')
  return isBackstagePasses
}

const decreaseSellIn = (item) => {
  const notEliteItem = !checkIsEliteItem(item)
  if (notEliteItem) {
    item.sell_in--
  }
}

function setQuality(item, newValue) {
  const notElite = !checkIsEliteItem(item)
  if (
    qualityMoreThanZero(item.quality) &&
    qualityLessThanFifty(item.quality) &&
    notElite
  ) {
    item.quality = newValue
  }
}

function changeBackstageQuality(item) {
  const { sell_in: sellIn, quality } = item
  const newQualityValue = sellInEqualZero(sellIn)
    ? 0
    : sellInLessThanSix(sellIn)
      ? quality + 3
      : sellInLessThanEleven(sellIn)
        ? quality + 2
        : quality + 1

  setQuality(item, newQualityValue)    
}



function updateQuality() {
  items.forEach((item, i) => {
    const { 
      name,  
      sell_in: sellIn, 
    } = item

    const isRisePriceItem = checkIsRisePricePasses(item)
    if (isRisePriceItem) {
      const isBackstagePasses = checkIsBackstagePasses(item)
      isBackstagePasses ? changeBackstageQuality(item) : setQuality(item, item.quality + 1)    
    } else {
      setQuality(item, item.quality - 1)
    }

    decreaseSellIn(item)

    //a little bit confusing, since it's not said the the quality of risePrise items
    // grow 2 times faster when their sell_in value is smaller than 0
    // This rule relates only to descreasing(according to TechSpecs)
    if (sellInLessThanZero(sellIn)) {
      isRisePriceItem 
        ? setQuality(item, item.quality + 1) 
        : setQuality(item, item.quality - 1)
    }
  })
}
