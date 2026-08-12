import Footer from "./components/organisms/Footer/Footer";
import IconFeatures from "./components/organisms/IconFeatures/IconFeatures";
import ProductGrid from "./components/organisms/ProductGrid/ProductGrid";
import ProductLists from "./components/organisms/ProductLists/ProductLists";
import PromoBanners from "./components/organisms/PromoBanners/PromoBanners";
import NewsletterBanner from "./components/organisms/NewsletterBanner/NewsletterBanner";
import { Heading } from "./components/atoms";

import {
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
} from "./assets/images";

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

const iconFeaturesList = [
  {
    icon: featurePrices,
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
  },
  {
    icon: featureDelivery,
    title: "Free delivery",
    subtitle: "24/7 amazing services",
  },
  {
    icon: featureDeal,
    title: "Great daily deal",
    subtitle: "When you sign up",
  },
  {
    icon: featureAssortment,
    title: "Wide assortment",
    subtitle: "Mega Discounts",
  },
  { icon: featureReturns, title: "Easy returns", subtitle: "Within 30 days" },
];

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

const sectionStyle = { padding: "0 2rem", boxSizing: "border-box" as const };

function Playground() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
      {/* Popular Products */}
      <div style={sectionStyle}>
        <Heading lvl={2}>Popular Products</Heading>
        <div style={{ height: "1.5rem" }} />
        <ProductGrid products={gridProducts} />
      </div>

      {/* Promo Banners */}
      <div style={sectionStyle}>
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
      </div>

      {/* Top Selling / Trending / Recently Added / Top Rated */}
      <div style={sectionStyle}>
        <ProductLists columns={listColumns} />
      </div>

      {/* Newsletter Banner */}
      <div style={sectionStyle}>
        <NewsletterBanner
          title="Stay home & get your daily needs from our shop"
          subtitle="Start Your Daily Shopping with Nest Mart"
        />
      </div>

      {/* Icon Features */}
      <div style={sectionStyle}>
        <IconFeatures features={iconFeaturesList} />
      </div>

      {/* Footer */}
      <Footer
        columns={footerColumns}
        supportContacts={[
          { number: "1900646666", label: "Working 8:00 - 22:00" },
          { number: "1900648888", label: "24/7 Support Center" },
        ]}
        copyrightText="© 2022, Nest - HTML Ecommerce Template. All rights reserved"
      />
    </div>
  );
}

export default Playground;
