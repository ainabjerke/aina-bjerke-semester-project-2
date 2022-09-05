export function createBanner(item) {
  // console.log("item", item.hero_banner.name);
  const bannerContainer = document.querySelector(".hero__banner");
  bannerContainer.style.backgroundImage = `url("${item.hero_banner.name}")`;
  // bannerContainer.style.width = "100%";
  // bannerContainer.style.height = "300px";
  // bannerContainer.style.background = `url("${item.hero_banner.name}")`;
  //bannerContainer.style.background = `url("${item.id}")`;
  // https://www.w3schools.com/images/w3schools_green.jpg
}
