//FUNCTION THAT GETS THE HEROBANNER IMAGE UPLOADED TO STRAPI:
//REFERENCE: https://www.w3schools.com/jsref/prop_style_backgroundimage.asp

export function launchHeroBanner(item) {
  // console.log("item", item.hero_banner.name);
  const heroBannerContainer = document.querySelector(".hero__banner");
  heroBannerContainer.style.backgroundImage = `url("${item.hero_banner.name}")`;
}
