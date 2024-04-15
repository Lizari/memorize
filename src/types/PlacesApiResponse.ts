export type PlacesApiResponse = {
  places: [
    {
      location: {
        latitude: number;
        longitude: number;
      };
      displayName: {
        text: string;
        languageCode: string;
      };
    }
  ];
};
