import {
  SiteHeader,
  Footer,
  ProductGrid,
  NewsletterBanner,
  CategoryPanel,
  PriceFilterPanel,
  NewProductPanel,
  DealsContainer,
} from "../components/organisms";
import { Breadcrumb } from "../components/molecules";
import { Heading, Chip, Button, Icon } from "../components/atoms";
import { Chevron } from "../assets/icons/index";
import { Page } from "../types";
import {
  gridProducts,
  productList,
  shopCategoryList,
  colors,
  itemCondition,
  newProducts,
  footerAboutList,
  footerColumns,
  filterTags,
  hyperlinkConfig,
} from "../mocks/index";
import { translations } from "../translations/translations";
import "./Shop.css";

interface ShopProps {
  onNavigate: (page: Page) => void;
}

function Shop({ onNavigate }: ShopProps) {
  const footerTranslate = translations.en.footer;
  const newsletterTranslate = translations.en.newsletterBanner;
  const categoryTranslate = translations.en.categoryList;
  const breadcrumbTranslate = translations.en.breadcrumb;
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <Breadcrumb
        trail={[
          { label: breadcrumbTranslate.shop, link: "#" },
          { label: breadcrumbTranslate.snack },
        ]}
      />
      <div className="shop-page" style={{ marginTop: "2.5rem" }}>
        <div className="shop-section">
          <div className="shop-banner">
            <Heading lvl={1}>{categoryTranslate.snack}</Heading>
            <div className="shop-banner__tags">
              {filterTags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="shop-section shop-content">
          <div className="shop-content__main">
            <ProductGrid
              productCardList={gridProducts}
              hyperlinkList={hyperlinkConfig}
            />
            <div className="shop-pagination">
              <Button variant="arrow-button-left">
                <Icon
                  src={Chevron}
                  alt="Chevron"
                  size={16}
                  className="icon--gray"
                ></Icon>
              </Button>
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
              <Button variant="arrow-button-right">
                <Icon
                  src={Chevron}
                  alt="Chevron"
                  size={16}
                  className="icon--gray"
                ></Icon>
              </Button>
            </div>
            <DealsContainer productList={productList} />
          </div>
          <div className="shop-content__sidebar">
            <CategoryPanel cardList={shopCategoryList} />
            <PriceFilterPanel
              min={500}
              max={1000}
              colors={colors}
              conditions={itemCondition}
            ></PriceFilterPanel>
            <NewProductPanel productRowList={newProducts} />
          </div>
        </div>
        <div className="shop-section">
          <NewsletterBanner
            title={newsletterTranslate.title}
            subtitle={newsletterTranslate.subtitle}
          />
        </div>
        <Footer
          columns={footerColumns}
          aboutContent={footerAboutList}
          supportContacts={[
            { number: "1900 - 6666", label: "Working 8:00 - 22:00" },
            { number: "1900 - 8888", label: "24/7 Support Center" },
          ]}
          copyrightText={footerTranslate.copyrightText}
        />
      </div>
    </div>
  );
}

export default Shop;
