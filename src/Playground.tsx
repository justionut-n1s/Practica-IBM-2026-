import React, { useState } from "react";
import {
  HeaderUpperSection,
  HeaderMidSection,
  HeaderBottomSection,
  HeroSlider,
  ProductGrid,
  DealsContainer,
  CategoryCarousel,
  Footer,
  NewsletterBanner,
  PromoBanners,
  ProductLists,
  CategoryPanel,
  FilterPanel,
  NewProductPanel,
} from "./components/organisms";
import {
  cardList,
  footerColumns,
  footerAboutList,
  hyperlinkList,
  productList,
  comboboxList,
  allCategoriesList,
  locationList,
  options,
  navItems,
  bottomHeaderComboboxList,
  slideList,
  iconFeaturesList,
  categoryList,
  checkboxList,
  newProducts,
  productCards,
  listColumns,
  bannerList,
} from "./mocks/index";
import { translations } from "./translations/translations";

function Playground() {
  const footerTranslation = translations.en.footer;
  const newsletterTranslation = translations.en.newsletterBanner;

  const sectionStyle = { padding: "0 2rem", boxSizing: "border-box" as const };

  return (
    <>
      <HeaderUpperSection
        hyperlinkList={hyperlinkList}
        comboboxList={comboboxList}
      ></HeaderUpperSection>
      <HeaderMidSection
        categoryList={allCategoriesList}
        locationList={locationList}
        hyperlinkOptions={options}
      ></HeaderMidSection>
      <HeaderBottomSection
        optionList={bottomHeaderComboboxList}
        navItemList={navItems}
      ></HeaderBottomSection>
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        <div style={sectionStyle}>
          <HeroSlider slideList={slideList} intervalMs={5000}></HeroSlider>
          <ProductGrid productCardList={productCards}></ProductGrid>
          <DealsContainer productList={productList}></DealsContainer>
          <PromoBanners banners={bannerList}></PromoBanners>
          <CategoryCarousel cardList={cardList}></CategoryCarousel>
          <CategoryPanel cardList={categoryList}></CategoryPanel>
          <FilterPanel checkboxList={checkboxList}></FilterPanel>
          <NewProductPanel productRowList={newProducts}></NewProductPanel>
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
            title={newsletterTranslation.title}
            subtitle={newsletterTranslation.subtitle}
          />
        </div>

        {/*
        <div style={sectionStyle}>
          <IconFeatures features={iconFeaturesList} />
        </div> */}

        <Footer
          columns={footerColumns}
          aboutContent={footerAboutList}
          supportContacts={[
            { number: "1900 - 6666", label: "Working 8:00 - 22:00" },
            { number: "1900 - 8888", label: "24/7 Support Center" },
          ]}
          copyrightText={footerTranslation.copyrightText}
        ></Footer>
      </div>
    </>
  );
}

export default Playground;
