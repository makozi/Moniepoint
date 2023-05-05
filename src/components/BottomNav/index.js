import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as VoucherIcon } from "assets/icons/voucher.svg";
import { ReactComponent as WalletIcon } from "assets/icons/wallet.svg";
import { ReactComponent as SettingIcon } from "assets/icons/setting.svg";
import { AppWrapper } from "components/Wrappers";
import BottomNavItem from "./BottomNavItem";
import { BottomNavWrapper } from "./BottomNav.style";
import "./BottomNav.css"

export default function BottomNav() {
  const menuOptions = [
    {
      icon: <HomeIcon />,
      text: "Home",
      active: true,
    },
    {
      icon: <VoucherIcon />,
      text: "Voucher",
      active: false,
    },
    {
      icon: <WalletIcon />,
      text: "Wallet",
      active: false,
    },
    {
      icon: <SettingIcon />,
      text: "Settings",
      active: false,
    },
  ];

  return (
    <BottomNavWrapper>
      <AppWrapper>
        <div className="bottom-nav-content">
          {menuOptions.map((item) => (
            <BottomNavItem {...item} key={item.text} />
          ))}
        </div>
      </AppWrapper>
    </BottomNavWrapper>
  );
}
