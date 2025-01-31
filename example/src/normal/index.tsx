import * as React from 'react';
import { View } from 'react-native-ui-lib';
import Carousel from 'react-native-reanimated-carousel';
import { SBItem } from '../components/SBItem';
import SButton from '../components/SButton';
import { ElementsText, window } from '../constants';

const PAGE_WIDTH = window.width;

function Index() {
    const [isVertical, setIsVertical] = React.useState(false);
    const [isFast, setIsFast] = React.useState(false);
    const [isAutoPlay, setIsAutoPlay] = React.useState(false);

    const baseOptions = isVertical
        ? ({
              vertical: true,
              width: PAGE_WIDTH,
              height: PAGE_WIDTH / 2,
          } as const)
        : ({
              vertical: false,
              width: PAGE_WIDTH,
              height: PAGE_WIDTH / 2,
          } as const);

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                {...baseOptions}
                loop
                autoPlay={isAutoPlay}
                autoPlayInterval={isFast ? 100 : 1500}
                data={[...new Array(6).keys()]}
                renderItem={({ index }) => <SBItem key={index} index={index} />}
            />
            <SButton
                onPress={() => {
                    setIsVertical(!isVertical);
                }}
            >
                {isVertical ? 'Set horizontal' : 'Set Vertical'}
            </SButton>
            <SButton
                onPress={() => {
                    setIsFast(!isFast);
                }}
            >
                {isFast ? 'NORMAL' : 'FAST'}
            </SButton>
            <SButton
                onPress={() => {
                    setIsAutoPlay(!isAutoPlay);
                }}
            >
                {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
            </SButton>
        </View>
    );
}

export default Index;
