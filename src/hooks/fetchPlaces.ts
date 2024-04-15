/**
 * Google Places Apiからキーワードに近い建物名・座標を取得する
 *
 * @param query 住所、建物名
 * @returns
 */
export const fetchPlaces = async (query: string) => {
  const url = import.meta.env.VITE_GOOGLE_API_URL;
  const key = import.meta.env.VITE_GOOGLE_API_KEY;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.displayName,places.location",
    },
    body: JSON.stringify({
      textQuery: query,
    }),
  });

  return res.json();
};
