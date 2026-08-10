import React, { useState } from "react";
import {
  Button,
  Icon,
  Image,
  Text,
  Hyperlink,
  Card,
  Heading,
  PriceTag,
  Combobox,
  Logo,
} from "./components/atoms";
import {
  ProductCard,
  NavItem,
  ProductRow,
  Dropdown,
  TeamMemberCard,
  HyperlinkGroup,
  HyperlinkGroupItem,
  HeaderComboboxSection,
  HeaderComboboxSectionItem,
  SearchBar,
  IconCombobox,
} from "./components/molecules";
import {
  HeaderUpperSection,
  OptionsGroup,
  OptionsGroupItem,
  HeaderMidSection,
  HeaderBottomSection,
  HeroSlider,
  HeroSliderProps,
  ProductGrid,
  ProductGridItem,
  DealsContainer,
  DealsContainerItem,
  BannerItem,
} from "./components/organisms";
import { Compare, Heart, Cart, Profile, Location } from "./assets/icons/index";
import {
  BannerImg1,
  DealsContainerImg1,
  DealsContainerImg2,
  DealsContainerImg3,
  DealsContainerImg4,
  BannerImg2,
  BannerImg3,
} from "./assets/images/index";

const optionList = [
  { value: "Las Vegas, NV" },
  { value: "Henderson, NV" },
  { value: "Reno, NV" },
  { value: "San Francisco, CA" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const hyperlinkList: HyperlinkGroupItem[] = [
    { id: 1, message: "About us", link: "" },
    { id: 2, message: "My Account", link: "" },
    { id: 3, message: "Wishlist", link: "" },
    { id: 4, message: "Order Tracking", link: "" },
  ];

  const optionList1: string[] = ["value1", "value2", "value3", "value4"];
  const optionList2: string[] = ["CAD", "EUR", "CHF"];

  const comboboxList: HeaderComboboxSectionItem[] = [
    {
      key: 1,
      name: "firstCB",
      id: "1",
      className: "combobox-style combobox-style--header-upper-section",
      selectedOptionLabel: "English",
      optionList: optionList1,
    },
    {
      key: 2,
      name: "secondCB",
      id: "2",
      className: "combobox-style combobox-style--header-upper-section",
      selectedOptionLabel: "USD",
      optionList: optionList2,
    },
  ];

  const options: OptionsGroupItem[] = [
    { id: 1, iconSrc: Compare, textItem: "Compare", link: "" },
    { id: 2, iconSrc: Heart, textItem: "Wishlist", link: "" },
    { id: 3, iconSrc: Cart, textItem: "Cart", link: "" },
    { id: 4, iconSrc: Profile, textItem: "Account", link: "" },
  ];

  const productCards: ProductGridItem[] = [
    {
      id: 1,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 2,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 3,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 4,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 5,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 6,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 7,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 8,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 9,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
    {
      id: 10,
      imageSrc: "https://placehold.co/200x200",
      name: "Produs Test",
      category: "Test",
      name_link: "https://placehold.co/200x200",
      provider: " Provider ",
      rating: 3.2,
      price: "25.25",
      oldPrice: "30",
      badgeText: "New",
      badgeVariant: "green",
    },
  ];

  const productList: DealsContainerItem[] = [
    {
      id: 1,
      imageSrc: DealsContainerImg1,
      numericValue: 555,
      name: "Product",
      link: "",
      rating: 4,
      provider: " Provider",
      price: "29.99",
      oldPrice: "49.99",
    },
    {
      id: 2,
      imageSrc: DealsContainerImg2,
      numericValue: 555,
      name: "Product",
      link: "",
      rating: 1,
      provider: " Provider",
      price: "29.99",
      oldPrice: "49.99",
    },
    {
      id: 3,
      imageSrc: DealsContainerImg3,
      numericValue: 555,
      name: "Product",
      link: "",
      rating: 5,
      provider: " Provider",
      price: "29.99",
      oldPrice: "49.99",
    },
    {
      id: 4,
      imageSrc: DealsContainerImg4,
      numericValue: 555,
      name: "Product",
      link: "",
      rating: 3.5,
      provider: " Provider",
      price: "29.99",
      oldPrice: "49.99",
    },
  ];

  const bannerList: BannerItem[] = [
    {
      id: 1,
      imageSrc: BannerImg1,
      bannerTitle: "Everyday Fresh & Clean with Our Products",
    },
    {
      id: 2,
      imageSrc: BannerImg2,
      bannerTitle: "Make your Breakfast Healthy and Easy",
    },
    {
      id: 3,
      imageSrc: BannerImg3,
      bannerTitle: "The Best Organic Products Online",
    },
  ];

  return (
    <>
      {/* <HyperlinkGroup content={hyperlinkList}></HyperlinkGroup>
      <Combobox
        name="name"
        id="id"
        className="combobox-style"
        selectedOptionLabel="Add Categories"
        optionList={optionList1}
      ></Combobox>
      <HeaderComboboxSection
        comboboxContentList={comboboxList}
      ></HeaderComboboxSection> */}
      <HeaderUpperSection
        hyperlinkList={hyperlinkList}
        comboboxList={comboboxList}
      ></HeaderUpperSection>
      {/* <OptionsGroup optionsList={options}></OptionsGroup>
      <Logo logoHeight={52} logoWidth={180}></Logo>
      <SearchBar
        comboboxOptions={optionList1}
        placeholder="Search for items..."
        inputClassName="text-input text-input--header-input"
      ></SearchBar>
      <IconCombobox
        options={optionList1}
        iconSrc={Location}
        size={16}
        placeholder="Your Location"
        value={selectedOption}
        onValueChange={setSelectedOption}
      ></IconCombobox> */}
      <HeaderMidSection
        optionList1={optionList1}
        optionList2={optionList1}
        hyperlinkOptions={options}
      ></HeaderMidSection>
      <HeaderBottomSection></HeaderBottomSection>
      <HeroSlider
        title="Don't miss amazing
      grocery deals"
        subtitle="Sign up for the daily newsletter"
        placeholder="Your email address"
        buttonLabel="Subscribe"
      ></HeroSlider>
      <ProductGrid productCardList={productCards}></ProductGrid>
      <DealsContainer
        productList={productList}
        bannerList={bannerList}
      ></DealsContainer>
    </>
  );
}

export default App;
