export async function getWeather(city, setWeather) {
  const currentUrl = new URL(window.location.href);
  const response = await fetch(`${currentUrl.href}current?city=${city}`);
  const data = await response.json();
  setWeather(data);
  return data;
}
