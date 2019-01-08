## Synopsis

This component allows to design and display native style rows with required accessory view.


## Screenshots

![Alt text](./Screeenshots/checkmarks.png?raw=true "Checkmarks") ![Alt text](./Screeenshots/mulitpleSubtitles.png?raw=true "Mulitple Subtitles") ![Alt text](./Screeenshots/disclosureIndicator.png?raw=true "Disclosure Indicator") ![Alt text](./Screeenshots/titles.png?raw=true "Titles") ![Alt text](./Screeenshots/details.png?raw=true "Details")

## Code Example

Check /Example Directory.

## Motivation

In react native, there is no straightforward way to achieve native (iOS and android) style rows as simple as passing enum.

## Installation

1. `npm install react-native-list-row`

## License

## Props

### 'item'
type - any
data to be returned back at 'onRowTapped'

### 'titleText'
type - String
title to be displayed for row

### 'detailText'
type - String
detailText to be displayed for row(at right)

### 'subTitles'
type - Array
array of subtitles texts for row

### 'subTitleText'
type - String
subtitle text to be displayed(below title)


### 'accessoryView'
type - AccessoryView
available values - DisclosureIndicator or Checkmark or None
type of accessory view to be displayed



