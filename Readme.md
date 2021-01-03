<p align="center">
  <img alt="semantic-ui-react-native" src="https://user-images.githubusercontent.com/4863567/102728950-86e3aa80-433f-11eb-9f6c-edbe1153a8b5.png" width="300">
</p>

<p align="center">
  Semantic UI Kit For React Native
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@muratoner/semantic-ui-react-native"><img src="https://img.shields.io/npm/v/@muratoner/semantic-ui-react-native.svg"></a>
  <a href="https://travis-ci.org/muratoner/semantic-ui-react-native"><img src="https://img.shields.io/travis/muratoner/semantic-ui-react-native/master.svg"></a>
  <a href="https://codecov.io/gh/muratoner/semantic-ui-react-native"><img src="https://codecov.io/gh/muratoner/semantic-ui-react-native/coverage.svg"></a>
  <a href="https://www.npmjs.com/package/@muratoner/semantic-ui-react-native"><img src="https://img.shields.io/npm/dm/@muratoner/semantic-ui-react-native.svg"></a>
  <a href="https://www.codefactor.io/repository/github/muratoner/semantic-ui-react-native"><img src="https://www.codefactor.io/repository/github/muratoner/semantic-ui-react-native/badge" alt="CodeFactor" /></a>
</p>

<p align="center">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="http://makeapullrequest.com/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <a href="https://david-dm.org/muratoner/semantic-ui-react-native"><img src="https://david-dm.org/muratoner/semantic-ui-react-native.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

| Avatar | Button | Checkbox | Divider |
| --- | --- | --- | --- |
| ![Avatar](https://user-images.githubusercontent.com/4863567/103447406-048eab00-4c9c-11eb-9415-3eeb653edd76.png) | ![Button](https://user-images.githubusercontent.com/4863567/103447395-d7da9380-4c9b-11eb-8262-fc73a60a70bf.png) | ![Checkbox](https://user-images.githubusercontent.com/4863567/103447377-a19d1400-4c9b-11eb-87ca-6083ecf43ff5.png) | ![Divider](https://user-images.githubusercontent.com/4863567/103447430-34d64980-4c9c-11eb-935d-d99d240fa080.png) |

| Icon | LabeledButton | ProgressBar | Title |
| --- | --- | --- | --- |
| ![Icon](https://user-images.githubusercontent.com/4863567/103447550-cd20fe00-4c9d-11eb-9fec-34805aec2c63.png) | ![LabeledButton](https://user-images.githubusercontent.com/4863567/103447556-e164fb00-4c9d-11eb-968f-6ff9dd44b4dc.png) | ![ProgressBar](https://user-images.githubusercontent.com/4863567/103447661-20e01700-4c9f-11eb-8133-c8939fc97721.png) | ![Title](https://user-images.githubusercontent.com/4863567/103447669-39503180-4c9f-11eb-99c6-c37a5cd62055.png) |

| SocialIcon Button | ? | ? | ? |
| --- | --- | --- | --- |
| ![Simulator Screen Shot - iPhone 11 - 2021-01-03 at 04 39 08](https://user-images.githubusercontent.com/4863567/103470025-c964a880-4d7d-11eb-8b03-460653997271.png) | ![Simulator Screen Shot - iPhone 11 - 2021-01-03 at 04 39 08](https://user-images.githubusercontent.com/4863567/103470056-442dc380-4d7e-11eb-9d8c-5330d884b083.png) | ![Simulator Screen Shot - iPhone 11 - 2021-01-03 at 04 39 08](https://user-images.githubusercontent.com/4863567/103470056-442dc380-4d7e-11eb-9d8c-5330d884b083.png) | ![Simulator Screen Shot - iPhone 11 - 2021-01-03 at 04 39 08](https://user-images.githubusercontent.com/4863567/103470056-442dc380-4d7e-11eb-9d8c-5330d884b083.png) |

## Get Started

### Installation

#### Step 1: Install @muratoner/semantic-ui-react-native

```bash
# yarn
yarn add @muratoner/semantic-ui-react-native
# or with npm
npm i @muratoner/semantic-ui-react-native --save
```

#### Step 2: Install react-native-vector-icons

If you have already installed react-native-vector-icons as a dependency for your project you can skip this step. Otherwise run the following command:

> Manual linking of react-native-vector-icons is not necessary if you're using react-native@0.60.0 or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run react-native unlink react-native-vector-icons and the process will run as expected.

```bash
# yarn
yarn add react-native-vector-icons
# or with npm
npm i --save react-native-vector-icons

# link
react-native link react-native-vector-icons
```

If you have any issues installing react-native-vector-icons, check out their installation guide [here](https://github.com/oblador/react-native-vector-icons#installation).

### Usage

Start using the components or try it on Snack
[here](https://snack.expo.io/@muratoner/semantic-ui-react-native).

```js
import { Button, LabeledButton } from '@muratoner/semantic-ui-react-native';

<Button
  disabled
  loading
  outline
  title="Add Friend"
  color="red"
  iconName="user"
  iconType="FontAwesome"
/>;
<LabeledButton
  outline
  pointing
  color="primary"
  label="Forks"
  labelIcon="fork"
  labelIconType="AntDesign"
  title="1,048"
/>;
```

## Components

- [ ] Accordion
- [x] Avatar
- [ ] Avatar Group
- [ ] Badge
- [ ] BottomSheet
- [ ] Breadcrumb
- [x] Button
- [ ] ButtonGroup
- [ ] Card
- [ ] Color Picker
- [x] CheckBox
- [ ] CheckBoxGroup
- [ ] Comment
- [x] Divider
- [ ] Dimmer
- [ ] Feed
- [ ] Flag
- [ ] Grid
- [ ] Header
- [ ] HTML style headings
- [x] Icon
- [ ] Image
- [ ] Input
- [ ] Label
- [ ] ListItem
- [ ] Loader
- [ ] Message
- [ ] Overlay
- [ ] Placeholder
- [ ] Pricing
- [x] Progress
- [ ] Rating
- [ ] RadioGroup
- [ ] SearchBar
- [ ] Segment
- [ ] Statistic
- [ ] Step
- [ ] Slider
- [ ] Social Icons / Social Icon Buttons
- [ ] Tab
- [ ] Table
- [x] Title
- [ ] Tooltip
