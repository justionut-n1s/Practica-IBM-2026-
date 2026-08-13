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
  CategoryCarousel,
  CategoryCarouselItem,
  Footer,
  IconFeatures,
  NewsletterBanner,
  PromoBanners,
  ProductLists,
} from "./components/organisms";
import {
  Compare,
  Heart,
  Cart,
  Profile,
  Location,
  Headset,
  Mail,
  Hours,
} from "./assets/icons/index";
import {
  BannerImg1,
  DealsContainerImg1,
  DealsContainerImg2,
  DealsContainerImg3,
  DealsContainerImg4,
  BannerImg2,
  BannerImg3,
  MilkAndDairy,
  WineAndAlcohol,
  ClothingAndBeauty,
  PetFood,
  PackagedFastFood,
  BakingMaterial,
  FruitsAndVegetables,
  FreshSeafood,
  featureAssortment,
  featureDeal,
  featureDelivery,
  featurePrices,
  featureReturns,
  promo1,
  promo2,
  promo3,
  meatballs,
  mightyMuffin,
  moringaPowder,
  nuts,
  pistachioButter,
  coconutFlakes,
  dandyBlend,
  iceCream,
  organicCoffee,
  organicLatte,
  snackMix,
  veggiePops,
  stews,
  shake,
  reishiCoffee,
} from "./assets/images/index";

const optionList = [
  { value: "Las Vegas, NV" },
  { value: "Henderson, NV" },
  { value: "Reno, NV" },
  { value: "San Francisco, CA" },
];

function Playground() {
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

  const cardList: CategoryCarouselItem[] = [
    { id: 1, imageSrc: MilkAndDairy, cardLabel: "Milk & Dairy" },
    { id: 2, imageSrc: WineAndAlcohol, cardLabel: "Wine & Alcohol" },
    { id: 3, imageSrc: ClothingAndBeauty, cardLabel: "Clothing & Beauty" },
    { id: 4, imageSrc: PetFood, cardLabel: "Pet Food & Toys" },
    { id: 5, imageSrc: PackagedFastFood, cardLabel: "Packaged Fast Food" },
    { id: 6, imageSrc: BakingMaterial, cardLabel: "Baking Material" },
    { id: 7, imageSrc: FruitsAndVegetables, cardLabel: "Fruits & Vegetables" },
    { id: 8, imageSrc: FreshSeafood, cardLabel: "Fresh Seafood" },
  ];

  const gridProducts = [
    {
      imageSrc: meatballs,
      name: "All Natural Style Chicken Meatballs",
      name_link: "#",
      category: "Snack",
      provider: "NestFood",
      rating: 4,
      price: "52.85",
      oldPrice: "55.80",
      badgeText: "Best",
      badgeVariant: "green" as const,
    },
    {
      imageSrc: mightyMuffin,
      name: "Chobani Complete Vanilla Greek Yogurt",
      name_link: "#",
      category: "Dairy",
      provider: "Country Crock",
      rating: 4,
      price: "54.85",
      oldPrice: "58.85",
      badgeText: "Hot",
      badgeVariant: "pink" as const,
    },
    {
      imageSrc: moringaPowder,
      name: "Moringa Powder Organic Superfood",
      name_link: "#",
      category: "Health",
      provider: "NestFood",
      rating: 5,
      price: "23.85",
      badgeText: "New",
      badgeVariant: "blue" as const,
    },
    {
      imageSrc: nuts,
      name: "Blue Almonds Lightly Salted Vegetables",
      name_link: "#",
      category: "Snack",
      provider: "Country Crock",
      rating: 4,
      price: "23.85",
      oldPrice: "28.85",
    },
    {
      imageSrc: pistachioButter,
      name: "Wilderness Poets Pistachio Butter",
      name_link: "#",
      category: "Snack",
      provider: "NestFood",
      rating: 3,
      price: "17.85",
      oldPrice: "22.85",
    },
    {
      imageSrc: coconutFlakes,
      name: "Organic Coconut Flakes Premium",
      name_link: "#",
      category: "Baking",
      provider: "NestFood",
      rating: 5,
      price: "14.85",
      badgeText: "Sale",
      badgeVariant: "orange" as const,
    },
    {
      imageSrc: dandyBlend,
      name: "Gorton's Beer Battered Fish Fillets",
      name_link: "#",
      category: "Seafood",
      provider: "Hambger Hel",
      rating: 4,
      price: "23.85",
      oldPrice: "28.85",
    },
    {
      imageSrc: iceCream,
      name: "Haagen Caramel Cone Ice Cream Boxed",
      name_link: "#",
      category: "Dairy",
      provider: "Country Crock",
      rating: 5,
      price: "22.85",
      oldPrice: "26.85",
      badgeText: "Sale",
      badgeVariant: "orange" as const,
    },
    {
      imageSrc: organicCoffee,
      name: "Seeds of Change Organic Watermelon",
      name_link: "#",
      category: "Fresh Fruit",
      provider: "Hambger Hel",
      rating: 4,
      price: "43.50",
      oldPrice: "48.50",
    },
    {
      imageSrc: organicLatte,
      name: "Nestle Coffee Mate Coffee Creamer",
      name_link: "#",
      category: "Bread and Juice",
      provider: "Totino's Pizza",
      rating: 4,
      price: "52.80",
      oldPrice: "53.80",
    },
    {
      imageSrc: snackMix,
      name: "Angie's Sweet & Salty Kettle Corn",
      name_link: "#",
      category: "Snack",
      provider: "Country Crock",
      rating: 4,
      price: "48.85",
      oldPrice: "52.85",
      badgeText: "New",
      badgeVariant: "blue" as const,
    },
    {
      imageSrc: veggiePops,
      name: "Frozen Vegetables Broccoli & Spinach",
      name_link: "#",
      category: "Vegetables",
      provider: "Totino's Pizza",
      rating: 3,
      price: "71.00",
      oldPrice: "75.00",
    },
    {
      imageSrc: stews,
      name: "Pre-Portioned Low-Fat Ice Cream Yogurt",
      name_link: "#",
      category: "Bread and Juice",
      provider: "Maruchan Ramen",
      rating: 3,
      price: "79.00",
      oldPrice: "99.00",
    },
    {
      imageSrc: shake,
      name: "Frozen Fruit Strawberry & Berries",
      name_link: "#",
      category: "Fresh Fruit",
      provider: "Maruchan Ramen",
      rating: 4,
      price: "78.00",
      oldPrice: "98.00",
    },
    {
      imageSrc: reishiCoffee,
      name: "Extra Virgin Olive Oil, Canola Oil, Nonfat",
      name_link: "#",
      category: "Baking",
      provider: "Totino's Pizza",
      rating: 4,
      price: "58.00",
      oldPrice: "60.00",
    },
  ];

  const listColumns = [
    {
      title: "Top Selling",
      products: [
        {
          imageSrc: meatballs,
          name: "All Natural Style Chicken Meatballs",
          name_link: "#",
          rating: 5,
          price: "52.85",
          oldPrice: "55.80",
        },
        {
          imageSrc: snackMix,
          name: "Angie's Sweet & Salty Kettle Corn",
          name_link: "#",
          rating: 4,
          price: "48.85",
          oldPrice: "52.85",
        },
        {
          imageSrc: dandyBlend,
          name: "Gorton's Beer Battered Fish Fillets",
          name_link: "#",
          rating: 4,
          price: "23.85",
          oldPrice: "28.85",
        },
      ],
    },
    {
      title: "Trending Products",
      products: [
        {
          imageSrc: organicCoffee,
          name: "Seeds of Change Organic Watermelon",
          name_link: "#",
          rating: 4,
          price: "43.50",
          oldPrice: "48.50",
        },
        {
          imageSrc: veggiePops,
          name: "Frozen Vegetables Broccoli Spinach",
          name_link: "#",
          rating: 3,
          price: "11.00",
          oldPrice: "15.00",
        },
        {
          imageSrc: dandyBlend,
          name: "Gorton's Beer Battered Fish Fillets",
          name_link: "#",
          rating: 4,
          price: "23.85",
          oldPrice: "28.85",
        },
      ],
    },
    {
      title: "Recently Added",
      products: [
        {
          imageSrc: snackMix,
          name: "Seeds of Change Organic Red Rice",
          name_link: "#",
          rating: 4,
          price: "28.85",
          oldPrice: "32.80",
        },
        {
          imageSrc: meatballs,
          name: "All Natural Style Chicken Meatballs",
          name_link: "#",
          rating: 5,
          price: "52.85",
        },
        {
          imageSrc: snackMix,
          name: "Angie's Sweet & Salty Kettle Corn",
          name_link: "#",
          rating: 4,
          price: "48.85",
        },
      ],
    },
    {
      title: "Top Rated",
      products: [
        {
          imageSrc: nuts,
          name: "Blue Almonds Lightly Salted",
          name_link: "#",
          rating: 5,
          price: "23.85",
          oldPrice: "28.85",
        },
        {
          imageSrc: iceCream,
          name: "Haagen Caramel Cone Ice Cream",
          name_link: "#",
          rating: 5,
          price: "22.85",
          oldPrice: "26.85",
        },
        {
          imageSrc: meatballs,
          name: "All Natural Style Chicken Meatballs",
          name_link: "#",
          rating: 5,
          price: "52.85",
        },
      ],
    },
  ];

  // const iconFeaturesList = [
  //   {
  //     icon: featurePrices,
  //     title: "Best prices & offers",
  //     subtitle: "Orders $50 or more",
  //   },
  //   {
  //     icon: featureDelivery,
  //     title: "Free delivery",
  //     subtitle: "24/7 amazing services",
  //   },
  //   {
  //     icon: featureDeal,
  //     title: "Great daily deal",
  //     subtitle: "When you sign up",
  //   },
  //   {
  //     icon: featureAssortment,
  //     title: "Wide assortment",
  //     subtitle: "Mega Discounts",
  //   },
  //   { icon: featureReturns, title: "Easy returns", subtitle: "Within 30 days" },
  // ];

  const footerColumns = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Delivery Information", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Support Center", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Sign In", href: "#" },
        { label: "View Cart", href: "#" },
        { label: "My Wishlist", href: "#" },
        { label: "Track My Order", href: "#" },
        { label: "Help Ticket", href: "#" },
        { label: "Shipping Details", href: "#" },
        { label: "Compare products", href: "#" },
      ],
    },
    {
      title: "Corporate",
      links: [
        { label: "Become a Vendor", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Farm Business", href: "#" },
        { label: "Farm Careers", href: "#" },
        { label: "Our Suppliers", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Promotions", href: "#" },
      ],
    },
    {
      title: "Popular",
      links: [
        { label: "Milk & Flavoured Milk", href: "#" },
        { label: "Butter and Margarine", href: "#" },
        { label: "Eggs Substitutes", href: "#" },
        { label: "Marmalades", href: "#" },
        { label: "Sour Cream and Dips", href: "#" },
        { label: "Tea & Kombucha", href: "#" },
        { label: "Cheese", href: "#" },
      ],
    },
  ];

  const footerAboutList = [
    {
      id: 1,
      iconSrc: Location,
      alt: "Address",
      text: "Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    },
    {
      id: 1,
      iconSrc: Headset,
      alt: "Phone",
      text: "Call Us: (+91)-540-025-124553",
    },
    { id: 1, iconSrc: Mail, alt: "Email", text: "Email: sale@Nest.com" },
    {
      id: 1,
      iconSrc: Hours,
      alt: "Hours",
      text: "Hours: 10:00 - 18:00, Mon - Sat",
    },
  ];

  const sectionStyle = { padding: "0 2rem", boxSizing: "border-box" as const };

  return (
    <>
      <HeaderUpperSection
        hyperlinkList={hyperlinkList}
        comboboxList={comboboxList}
      ></HeaderUpperSection>
      <HeaderMidSection
        optionList1={optionList1}
        optionList2={optionList1}
        hyperlinkOptions={options}
      ></HeaderMidSection>
      <HeaderBottomSection></HeaderBottomSection>
      {/* <HeroSlider
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
      <CategoryCarousel cardList={cardList}></CategoryCarousel> */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        <div style={sectionStyle}>
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
          <CategoryCarousel cardList={cardList}></CategoryCarousel>
        </div>
        {/* <div style={sectionStyle}>
          <Heading lvl={2}>Popular Products</Heading>
          <div style={{ height: "1.5rem" }} />
          <ProductGrid products={gridProducts} />
        </div> */}
        {/* <div style={sectionStyle}>
          <PromoBanners
            banners={[
              {
                imageSrc: promo1,
                title: "Everyday Fresh & Clean with Our Products",
                buttonLabel: "Shop Now",
                buttonHref: "#",
              },
              {
                imageSrc: promo2,
                title: "Make your Breakfast Healthy and Easy",
                buttonLabel: "Shop Now",
                buttonHref: "#",
              },
              {
                imageSrc: promo3,
                title: "The best Organic Products Online",
                buttonLabel: "Shop Now",
                buttonHref: "#",
              },
            ]}
          />
        </div> */}
        <div style={sectionStyle}>
          <ProductLists columns={listColumns} />
        </div>

        <div style={sectionStyle}>
          <NewsletterBanner
            title="Stay home & get your daily needs from our shop"
            subtitle="Start Your Daily Shopping with Nest Mart"
          />
        </div>

        {/*
        <div style={sectionStyle}>
          <IconFeatures features={iconFeaturesList} />
        </div> */}

        {/* Footer */}
        <Footer
          columns={footerColumns}
          aboutContent={footerAboutList}
          supportContacts={[
            { number: "1900 - 6666", label: "Working 8:00 - 22:00" },
            { number: "1900 - 8888", label: "24/7 Support Center" },
          ]}
          copyrightText="© 2022, Nest - HTML Ecommerce Template. All rights reserved"
        ></Footer>
      </div>
    </>
  );
}

export default Playground;
