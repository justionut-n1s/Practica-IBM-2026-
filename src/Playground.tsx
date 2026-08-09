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
} from "./components/organisms";
import { Compare, Heart, Cart, Profile, Location } from "./assets/icons/index";

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

  return (
    <>
      <NavItem
        iconSrc="https://placehold.co/20x20"
        size={20}
        textItem="Test"
        link="https://placehold.co/20x20"
        is_arrow
      />

      <div style={{ display: "flex", gap: "24px" }}>
        <NavItem textItem="Home" link="/" />
        <NavItem textItem="About" link="/about" />
        <NavItem textItem="Shop" link="/shop" is_arrow />
        <NavItem textItem="Vendors" link="/vendors" is_arrow />
      </div>

      <Image
        src="https://placehold.co/200x150"
        alt="poza test"
        width={200}
        height={150}
      />
      <Image
        src="https://placehold.co/200x150"
        alt="poza test rotunda"
        width={200}
        height={150}
        rounded
      />

      <Icon src="https://placehold.co/40" alt="icon test" size={40} />
      <Icon src="https://placehold.co/20" alt="icon mic" size={20} />

      <Hyperlink message="PlaceHold" link="https://placehold.co/" />

      <PriceTag price="$28.85" oldPrice="$32.80" />

      <Card>
        <Text variant="header-upper-section" type="p">
          test card content
        </Text>
      </Card>
      <Card variant="flat">
        <Text variant="header-upper-section" type="p">
          card flat test
        </Text>
        <Button variant="add-button" onClick={() => {}}>
          ok
        </Button>
      </Card>
      <ProductCard
        imageSrc="https://placehold.co/200x200"
        name="Produs Test"
        category="Test"
        name_link="https://placehold.co/200x200"
        provider="PLACEHOLD"
        rating={3.2}
        price="25.25"
        oldPrice="30"
        badgeText="NEW"
        badgeVariant="green"
      />

      <div style={{ display: "flex", gap: "24px" }}>
        <NavItem textItem="Home" link="/" hyperlinkVariant="" />
        <NavItem textItem="About" link="/about" />
        <NavItem textItem="Shop" link="/shop" />
        <Dropdown
          label="Vendors"
          options={["All Vendors", "NEW Vendors", "Popular Vendors"]}
        />
      </div>

      <Heading lvl={1}>Heading 1</Heading>
      <Heading lvl={2}>Heading 2</Heading>
      <Heading lvl={3}>Heading 3</Heading>
      <Heading lvl={4}>Heading 4</Heading>

      <Heading lvl={1}>PRODUCTS</Heading>
      <div style={{ display: "flex", gap: "24px" }}>
        <ProductCard
          imageSrc="https://placehold.co/200x200"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          category="Test"
          provider="PLACEHOLD"
          rating={3.2}
          price="25.25"
          oldPrice="30"
          badgeText="NEW"
          badgeVariant="green"
        />
        <ProductCard
          imageSrc="https://placehold.co/200x200"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          category="Test"
          provider="PLACEHOLD"
          rating={4.2}
          price="25.25"
          oldPrice="30"
          badgeText="-20%"
          badgeVariant="pink"
        />
        <ProductCard
          imageSrc="https://placehold.co/200x200"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          category="Test"
          provider="PLACEHOLD"
          rating={5}
          price="25.25"
          oldPrice="30"
          badgeText="FRESH!"
          badgeVariant="blue"
        />
        <ProductCard
          imageSrc="https://placehold.co/200x200"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          category="Test"
          provider="PLACEHOLD"
          rating={1}
          price="25.25"
          oldPrice="30"
          badgeText="WOW"
          badgeVariant="orange"
        />
      </div>

      <Heading lvl={1}>POPULAR PRODUCTS</Heading>
      <div>
        <ProductRow
          imageSrc="https://placehold.co/100x100"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          rating={4}
          price="34"
          oldPrice="50"
        />
        <ProductRow
          imageSrc="https://placehold.co/100x100"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          rating={4}
          price="34"
          oldPrice="50"
        />
        <ProductRow
          imageSrc="https://placehold.co/100x100"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          rating={4}
          price="34"
          oldPrice="50"
        />
        <ProductRow
          imageSrc="https://placehold.co/100x100"
          name="Produs Test"
          name_link="https://placehold.co/200x200"
          rating={4}
          price="34"
          oldPrice="50"
        />
      </div>

      <TeamMemberCard
        imageSrc="https://placehold.co/200x200"
        name="Ana Popescu"
        role="Worker"
        socialLinks={[
          { icon: Cart, link: "https://facebook.com" },
          { icon: Cart, link: "https://twitter.com" },
        ]}
      />
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
    </>
  );
}

export default App;
