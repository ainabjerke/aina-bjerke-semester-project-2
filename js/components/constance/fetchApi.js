export async function fetchAPI(acutalFunction, url) {
  try {
    const response = await fetch(url);
    const JSON = await response.json();
    const getResults = JSON;
    console.log(getResults);
    acutalFunction(getResults);
  } catch (error) {
    // console.log(error);
  }
}

