# react-native-reanimated-carousel

<img src="./assets/example-01.gif" style='margin:0 auto;width:300px;display:block'/>

<br/>
<h2 style="text-align:center;">Simple carousel component.</h2>
<h2 style="text-align:center;">Fully implemented using Reanimated 2.</h2>
<h2 style="text-align:center;">Infinitely scrolling, very smooth.</h2>

> The common RN infinite scroll component. It's common to get stuck on a fast slide. Wait for the next element to appear. This component will not have similar problems. That's why this library was created.

## Installation

Open a Terminal in the project root and run:

```sh
yarn add react-native-reanimated-carousel
```

Or if you use npm:

```sh
npm install react-native-reanimated-carousel
```

Now we need to install [`react-native-gesture-handler`](https://github.com/kmagiera/react-native-gesture-handler) and [`react-native-reanimated(>=2.0.0)`](https://github.com/kmagiera/react-native-reanimated). 
Don't use Expo to install reanimated it not supported `Reanimated(v2)`

## Usage

```typescript
import Carousel from "react-native-reanimated-carousel";

// ...

<Carousel<{ color: string }>
  width={width}
  data={[{ color: "red" }, { color: "purple" }, { color: "yellow" }]}
  renderItem={({ color }) => {
    return (
      <View
        style={{
          backgroundColor: color,
          justifyContent: "center",
          flex: 1,
        }}
      />
    );
  }}
/>;
```

## Props

| name                    | required | default | types                                       | description                                                                    |
| ----------------------- | -------- | ------- | ------------------------------------------- | ------------------------------------------------------------------------------ |
| data                    | true     |         | T[]                                         | Carousel items data set                                                        |
| width                   | true     |         | number                                      | Specified carousel container width                                             |
| renderItem              | true     |         | (data: T, index: number) => React.ReactNode | Render carousel item                                                           |
| autoPlay                | false    | false   | boolean                                     | Auto play                                                                      |
| autoPlayReverse         | false    | false   | boolean                                     | Auto play reverse playback                                                     |
| autoPlayInterval        | false    | 1000    | autoPlayInterval                            | Auto play playback interval                                                    |
| layout                  | false    | defalut | 'default'                                   | Carousel Animated transitions                                                  |
| parallaxScrollingOffset | false    | 100     | number                                      | When use 'default' Layout props,this prop can be control prev/next item offset |
| parallaxScrollingScale  | false    | 0.8     | number                                      | When use 'default' Layout props,this prop can be control prev/next item scale  |
| style                   | false    | {}      | ViewStyle                                   | Carousel container style                                                       |
| height                  | false    | '100%'  | undefined \| string \| number               | Specified carousel container height                                            |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT