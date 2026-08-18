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
} from "../mocks/index";

import { translations } from "../translations/translations";

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
} from "../components/organisms";

const sectionStyle = { padding: "0 2rem", boxSizing: "border-box" as const };

function Home({ onNavigate }: HomeProps) {
  const footerTranslate = translations.en.footer;
  const newsletterTranslate = translations.en.newsletterBanner;
  return (
    <div>
      <SiteHeader onNavigate={onNavigate} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem",
          marginTop: "2rem",
        }}
      >
        <div style={sectionStyle}>
          <HeroSlider slideList={slideList} intervalMs={5000} />
        </div>

        <div style={sectionStyle}>
          <ProductGrid
            productCardList={gridProducts}
            hyperlinkList={hyperlinkConfig}
          />
        </div>

        <div style={sectionStyle}>
          <PromoBanners banners={bannerList} />
        </div>

        <div style={sectionStyle}>
          <DealsContainer productList={productList} />
        </div>
        <div style={sectionStyle}>
          <CategoryCarousel cardList={cardList} />
        </div>
        <div style={sectionStyle}>
          <ProductLists columns={listColumns} />
        </div>
        <div style={sectionStyle}>
          <NewsletterBanner
            title={newsletterTranslate.title}
            subtitle={newsletterTranslate.subtitle}
          />
        </div>
        <div style={sectionStyle}>
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
