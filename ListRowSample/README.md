## Synopsis

This component allows to design and display native style rows with required accessory view.

## npm 
https://www.npmjs.com/package/react-native-list-row

## Screenshots

<p float="left">
  <img src="./Screeenshots/checkmarks.png" width="213" height = "379" />
  <img src="./Screeenshots/disclosureIndicator.png" width="213" height = "379" />
  <img src="./Screeenshots/titles.png" width="213" height = "379" />
  <img src="./Screeenshots/details.png" width="213" height = "379" />
</p>

## Code Example

Check /Example Directory.

## Motivation

In react native, there is no straightforward way to achieve native (iOS and android) style rows as simple as passing enum.

## Installation

1. `npm install react-native-list-row`

## License

## Props

### `item`
type - any
data to be returned back at 'onRowTapped'

### `titleText`
type - String
title to be displayed for row

### `detailText`
type - String
detailText to be displayed for row(at right)

### `subTitles`
type - Array
array of subtitles texts for row

### `subTitleText`
type - String
subtitle text to be displayed(below title)


### `accessoryView`
type - AccessoryView
available values - DisclosureIndicator or Checkmark or None
type of accessory view to be displayed



