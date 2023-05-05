import {
  Category,
  Airplane,
  ClipboardText,
  Global,
  Coin1,
  MoneySend,
  I24Support,
  House2,
  KyberNetwork,
  Spotify,
} from "iconsax-react";
import Slider from "react-slick";
import { DotWrapper, DotContent } from "components/Wrappers";
import useTheme from "hooks/theme";
import QuickActionItem from "./QuickActionItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QuickActionsWrapper } from "./QuickActions.style";

export default function QuickActions() {
  const { theme } = useTheme();
  const { dimensions } = theme || {};

  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    appendDots: (dots) => (
      <DotWrapper>
        <ul style={{ margin: "0px" }}> {dots}</ul>
      </DotWrapper>
    ),
    customPaging: (i) => <DotContent className="dot-li-content"></DotContent>,
  };

  const iconProps = {
    color: theme.dark1,
    size: dimensions.iconSize,
  };

  const actions = [
    {
      text: "Category",
      icon: <Category {...iconProps} />,
    },
    {
      text: "Flight",
      icon: <Airplane {...iconProps} />,
    },
    {
      text: "Bill",
      icon: <ClipboardText {...iconProps} />,
    },
    {
      text: "Data plan",
      icon: <Global {...iconProps} />,
    },
    {
      text: "Top Up",
      icon: <Coin1 {...iconProps} />,
    },
    {
      text: "Get help",
      icon: <I24Support {...iconProps} />,
    },
    {
      text: "Donate",
      icon: <MoneySend {...iconProps} />,
    },
    {
      text: "Hotel",
      icon: <House2 {...iconProps} />,
    },
    {
      text: "Exercise",
      icon: <KyberNetwork {...iconProps} />,
    },
    {
      text: "Music",
      icon: <Spotify {...iconProps} />,
    },
  ];

  return (
    <QuickActionsWrapper>
      <Slider {...settings}>
        {actions.map((item) => (
          <QuickActionItem {...item} key={item.text} />
        ))}
      </Slider>
    </QuickActionsWrapper>
  );
}
