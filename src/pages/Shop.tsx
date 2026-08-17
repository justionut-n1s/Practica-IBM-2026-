import {
  SiteHeader,
  Footer,
  ProductGrid,
  NewsletterBanner,
  CategoryPanel,
  FilterPanel,
  NewProductPanel,
  DealsContainer,
} from "../components/organisms";
import { Breadcrumb } from "../components/molecules";
import { Heading, Chip, Button } from "../components/atoms";
import { Page } from "../types";
import "./Shop.css";

import {
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
  iconMilksDairies,
  iconClothing,
  iconPetFoods,
  iconBakingMaterial,
  iconFreshFruit,
  iconAddress,
  iconPhone,
  iconEmail,
  iconHours,
  dealsImg1,
  dealsImg2,
  dealsImg3,
  dealsImg4,
} from "../assets/images";

const gridProducts = [
  {
    id: 1,
    imageSrc: meatballs,
    name: "All Natural Style Chicken Meatballs",
    name_link: "#",
    category: "Snack",
    provider: "NestFood",
    rating: 4,
    price: "52.85",
    oldPrice: "55.80",
  },
  {
    id: 2,
    imageSrc: mightyMuffin,
    name: "Chobani Complete Vanilla Greek Yogurt",
    name_link: "#",
    category: "Dairy",
    provider: "Country Crock",
    rating: 4,
    price: "54.85",
    oldPrice: "58.85",
  },
  {
    id: 3,
    imageSrc: moringaPowder,
    name: "Moringa Powder Organic Superfood",
    name_link: "#",
    category: "Health",
    provider: "NestFood",
    rating: 5,
    price: "23.85",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    imageSrc: coconutFlakes,
    name: "Organic Coconut Flakes Premium",
    name_link: "#",
    category: "Baking",
    provider: "NestFood",
    rating: 5,
    price: "14.85",
  },
  {
    id: 7,
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
    id: 8,
    imageSrc: iceCream,
    name: "Haagen Caramel Cone Ice Cream Boxed",
    name_link: "#",
    category: "Dairy",
    provider: "Country Crock",
    rating: 5,
    price: "22.85",
    oldPrice: "26.85",
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
    imageSrc: snackMix,
    name: "Angie's Sweet & Salty Kettle Corn",
    name_link: "#",
    category: "Snack",
    provider: "Country Crock",
    rating: 4,
    price: "48.85",
    oldPrice: "52.85",
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    imageSrc: reishiCoffee,
    name: "Extra Virgin Olive Oil, Canola Oil, Nonfat",
    name_link: "#",
    category: "Baking",
    provider: "Totino's Pizza",
    rating: 4,
    price: "58.00",
    oldPrice: "60.00",
  },
  {
    id: 16,
    imageSrc: dandyBlend,
    name: "Foster Farms Takeout Crispy Classic",
    name_link: "#",
    category: "Baking",
    provider: "Country Crock",
    rating: 3,
    price: "17.85",
    oldPrice: "19.85",
  },
];

const dealsOfTheDay = [
  {
    id: 1,
    imageSrc: dealsImg1,
    numericValue: 426,
    name: "Seeds of Change Organic Quinoa, Brown",
    link: "#",
    provider: "NestFood",
    rating: 4,
    price: "32.85",
    oldPrice: "35.80",
  },
  {
    id: 2,
    imageSrc: dealsImg2,
    numericValue: 822,
    name: "Perdue Simply Smart Organics Gluten",
    link: "#",
    provider: "Old El Paso",
    rating: 4,
    price: "24.85",
    oldPrice: "26.80",
  },
  {
    id: 3,
    imageSrc: dealsImg3,
    numericValue: 1156,
    name: "Signature Wood-Fired Mushroom",
    link: "#",
    provider: "Progresso",
    rating: 3,
    price: "12.85",
    oldPrice: "15.80",
  },
  {
    id: 4,
    imageSrc: dealsImg4,
    numericValue: 398,
    name: "Simply Lemonade with Raspberry Juice",
    link: "#",
    provider: "Yoplait",
    rating: 3,
    price: "15.85",
    oldPrice: "16.80",
  },
];

const categoryCardList = [
  {
    id: 1,
    imageSrc: iconMilksDairies,
    alt: "Milks & Dairies",
    text: "Milks & Dairies",
    itemNumber: 3,
  },
  {
    id: 2,
    imageSrc: iconClothing,
    alt: "Clothing",
    text: "Clothing",
    itemNumber: 6,
  },
  {
    id: 3,
    imageSrc: iconPetFoods,
    alt: "Pet Foods",
    text: "Pet Foods",
    itemNumber: 7,
  },
  {
    id: 4,
    imageSrc: iconBakingMaterial,
    alt: "Baking material",
    text: "Baking material",
    itemNumber: 9,
  },
  {
    id: 5,
    imageSrc: iconFreshFruit,
    alt: "Fresh Fruit",
    text: "Fresh Fruit",
    itemNumber: 11,
  },
];

const filterCheckboxList = [
  {
    id: 1,
    title: "Color",
    options: ["Red (56)", "Green (78)", "Blue (54)"],
  },
  {
    id: 2,
    title: "Item Condition",
    options: ["New (1506)", "Refurbished (27)", "Used (45)"],
  },
];

const newProducts = [
  {
    id: 1,
    imageSrc: mightyMuffin,
    name: "Chen Cardigan",
    name_link: "#",
    rating: 4,
    price: "99.50",
  },
  {
    id: 2,
    imageSrc: nuts,
    name: "Chen Sweater",
    name_link: "#",
    rating: 4,
    price: "89.50",
  },
  {
    id: 3,
    imageSrc: coconutFlakes,
    name: "Colorful Jacket",
    name_link: "#",
    rating: 4,
    price: "25.00",
  },
];

const filterTags = ["Cabbage", "Broccoli", "Artichoke", "Celery", "Spinach"];

const footerAboutContent = [
  {
    id: 1,
    iconSrc: iconAddress,
    alt: "Address",
    text: "Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States",
  },
  {
    id: 2,
    iconSrc: iconPhone,
    alt: "Phone",
    text: "Call Us: (+91)-540-025-124553",
  },
  { id: 3, iconSrc: iconEmail, alt: "Email", text: "Email: sale@Nest.com" },
  {
    id: 4,
    iconSrc: iconHours,
    alt: "Hours",
    text: "Hours: 10:00 - 18:00, Mon - Sat",
  },
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

interface ShopProps {
  onNavigate: (page: Page) => void;
}

function Shop({ onNavigate }: ShopProps) {
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <Breadcrumb trail={[{ label: "Shop", link: "#" }, { label: "Snack" }]} />

      <div className="shop-page" style={{ marginTop: "2.5rem" }}>
        <div className="shop-section">
          <div className="shop-banner">
            <Heading lvl={1}>Snack</Heading>
            <div className="shop-banner__tags">
              {filterTags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>

        <div className="shop-section shop-content">
          <div className="shop-content__main">
            <ProductGrid productCardList={gridProducts} />

            <div className="shop-pagination">
              <Button variant="arrow-button-left">&larr;</Button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`shop-pagination__page ${
                    page === 2 ? "shop-pagination__page--active" : ""
                  }`}
                >
                  {page}
                </button>
              ))}
              <span>...</span>
              <button className="shop-pagination__page">6</button>
              <Button variant="arrow-button-right">&rarr;</Button>
            </div>
          </div>

          <div className="shop-content__sidebar">
            <CategoryPanel cardList={categoryCardList} />
            <FilterPanel checkboxList={filterCheckboxList} />
            <NewProductPanel productRowList={newProducts} />
          </div>
        </div>

        <div className="shop-section">
          <DealsContainer productList={dealsOfTheDay} />
        </div>

        <div className="shop-section">
          <NewsletterBanner
            title="Stay home & get your daily needs from our shop"
            subtitle="Start Your Daily Shopping with Nest Mart"
          />
        </div>

        <Footer
          columns={footerColumns}
          aboutContent={footerAboutContent}
          supportContacts={[
            { number: "1900646666", label: "Working 8:00 - 22:00" },
            { number: "1900648888", label: "24/7 Support Center" },
          ]}
          copyrightText="© 2022, Nest - HTML Ecommerce Template. All rights reserved"
        />
      </div>
    </div>
  );
}

export default Shop;
