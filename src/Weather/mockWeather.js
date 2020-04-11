import faker from "faker";

export default function createMockWeather(object = {}) {
  return {
    coord: { lon: faker.random.number(), lat: faker.random.number() },
    weather: [
      {
        id: faker.random.number(),
        main: faker.random.description,
        description: faker.random.description,
        icon: faker.image.imageUrl(),
      },
    ],
    base: faker.lorem.word(),
    main: {
      temp: faker.random.number(),
      feels_like: faker.random.number(),
      temp_min: faker.random.number(),
      temp_max: faker.random.number(),
      pressure: faker.random.number(),
      humidity: faker.random.number(),
    },
    visibility: faker.random.number(),
    wind: { speed: faker.random.number(), deg: faker.random.number() },
    clouds: { all: faker.random.number() },
    dt: faker.date.future().valueOf(),
    sys: {
      type: faker.random.number(),
      id: faker.random.number(),
      country: faker.address.countryCode(),
      sunrise: faker.date.past().valueOf(),
      sunset: faker.date.future().valueOf(),
    },
    timezone: faker.random.number(),
    id: faker.random.uuid(),
    name: faker.address.city(),
    cod: faker.random.number(),
    ...object,
  };
}
