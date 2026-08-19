import { Page } from "../types";
import {
  cardList,
  footerColumns,
  footerAboutList,
  productList,
  slideList,
  iconFeaturesList,
  gridProducts,
  listColumns,
  bannerList,
  hyperlinkConfig,
  categoryList,
  colors,
  itemCondition,
} from "../mocks/index";
import { salad } from "../assets/images/index";
import { translations } from "../translations/translations";
import "./Home.css";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

import {
  SiteHeader,
  Footer,
  IconFeatures,
  ProductGrid,
  ProductLists,
  PromoBanners,
  NewsletterBanner,
  HeroSlider,
  DealsContainer,
  CategoryCarousel,
  CategoryPanel,
  PriceFilterPanel,
} from "../components/organisms";

const sectionStyle = { padding: "0 2rem", boxSizing: "border-box" as const };

function Home({ onNavigate }: HomeProps) {
  const footerTranslate = translations.en.footer;
  const newsletterTranslate = translations.en.newsletterBanner;
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />
      <div className="home-page">
        <div className="home-page__hero-slider">
          <HeroSlider slideList={slideList} intervalMs={5000} />
        </div>
        <div className="home-page__mid-section">
          <div className="home-page__mid-section__sides">
            <ProductGrid
              productCardList={gridProducts}
              hyperlinkList={hyperlinkConfig}
            />
            <DealsContainer productList={productList} />
          </div>
          <div className="home-page__mid-section__sides">
            <CategoryPanel cardList={categoryList}></CategoryPanel>
            <PriceFilterPanel
              min={0}
              max={2000}
              colors={colors}
              conditions={itemCondition}
              decorativeImage={salad}
            ></PriceFilterPanel>
          </div>
        </div>
        <div className="home-page__section">
          <PromoBanners banners={bannerList} />
        </div>
        <div className="home-page__section">
          <CategoryCarousel cardList={cardList} />
        </div>
        <div className="home-page__section">
          <ProductLists columns={listColumns} />
        </div>
        <div className="home-page__section">
          <NewsletterBanner
            title={newsletterTranslate.title}
            subtitle={newsletterTranslate.subtitle}
          />
        </div>
        <div className="home-page__section">
          <IconFeatures features={iconFeaturesList} />
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

export default Home;
