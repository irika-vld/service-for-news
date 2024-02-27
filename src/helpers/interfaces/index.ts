export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export interface IWeatherData {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visability: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: { deg: number; gust: number; speed: number };
}

interface IFormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
}
export interface ICity extends HTMLFormElement {
  readonly elements: IFormElements;
}

export interface IValute {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

export type ValutesType = {
  [keys in ValutesKeys]: IValute;
};

export type ValutesKeys =
  | "AED"
  | "AMD"
  | "AUD"
  | "AZN"
  | "BGN"
  | "BRL"
  | "BYN"
  | "CAD"
  | "CHF"
  | "CNY"
  | "CZK"
  | "DKK"
  | "EGP"
  | "EUR"
  | "GBP"
  | "GEL"
  | "HKD"
  | "HUF"
  | "IDR"
  | "INR"
  | "JPY"
  | "KGS"
  | "KRW"
  | "KZT"
  | "MDL"
  | "NOK"
  | "NZD"
  | "PLN"
  | "QAR"
  | "RON"
  | "RSD"
  | "SEK"
  | "SGD"
  | "THB"
  | "TJS"
  | "TMT"
  | "TRY"
  | "UAH"
  | "USD"
  | "UZS"
  | "VND"
  | "XDR"
  | "ZAR";

export type CategoriesType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
