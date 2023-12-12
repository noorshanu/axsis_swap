let NavMenu = [
  {
    title: "Dex",
    hasSubMenu: true,
    iconImg: "/images/sidebar-icons/home.svg",
    route: "/dex",
    subMenus: [
      { label: "Axis Swap", link: "/axis-swap" },
      { label: "Gasless Swap", link: "/gasless-swap" },
      { label: "Liquidity Pools", link: "/liquidty-pools" },
    ],
  },
  {
    title: "LaunchPad",
    hasSubMenu: true,
    iconImg: "/images/sidebar-icons/rocket.svg",
    route: "/launch-pad",
    subMenus: [
      { label: "Create LBP", link: "/axis-swap" },
      { label: "Create Presale", link: "/gasless-swap" },
      { label: "Live Sales", link: "/LiquidityPools" },
      { label: "Leaderboard", link: "/LiquidityPools" },
    ],
  },
  {
    title: "Staking",
    hasSubMenu: true,
    iconImg: "/images/sidebar-icons/stacking.svg",
    route: "/stacking",
    subMenus: [
      { label: "Create Staking", link: "/axis-swap" },
      { label: "Live Staking Pools", link: "/gasless-swap" },
    ],
  },
  {
    title: "Dao",
    hasSubMenu: true,
    iconImg: "/images/sidebar-icons/dao.svg",
    route: "/dao",
    subMenus: [
      { label: "Axis Dao", link: "/axis-swap" },
      { label: "Create Dao", link: "/gasless-swap" },
    ],
  },
  {
    title: "Future",
    hasSubMenu: true,
    iconImg: "/images/sidebar-icons/future.svg",
    route: "/future",
    subMenus: [
      { label: "Trade", link: "/axis-swap" },
      { label: "Liquidity Pools", link: "/gasless-swap" },
    ],
  },
  {
    title: "Options",
    hasSubMenu: true,
    iconImg: "/images/sidebar-icons/options.svg",
    route: "/options",
    subMenus: [
      { label: "Trade", link: "/axis-swap" },
      { label: "Liquidity Pools", link: "/LiquidityPools" },
    ],
  },
  {
    title: "Lending & Borrowing",
    hasSubMenu: false,
    iconImg: "/images/sidebar-icons/lending.svg",
    route: "/lending-and-borrowing",
    subMenus: [],
  },
  {
    title: "Yield Aggregator",
    hasSubMenu: false,
    iconImg: "/images/sidebar-icons/yield.svg",
    route: "/yield-aggregator",
    subMenus: [],
  },

  {
    title: "NFTs",
    hasSubMenu: false,
    iconImg: "/images/sidebar-icons/nfts.svg",
    route: "/nfts",
    subMenus: [],
  },
  {
    title: "Portfolio",
    hasSubMenu: false,
    iconImg: "/images/sidebar-icons/portfolio.svg",
    route: "/portfolio",
    subMenus: [],
  },
  {
    title: "Docs",
    hasSubMenu: false,
    iconImg: "/images/sidebar-icons/docs.svg",
    route: "/docs",
    subMenus: [],
  },
];

export default NavMenu;
