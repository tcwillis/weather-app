const transformLocationProps = location => ({
  id: location.woeid,
  type: location.location_type,
  title: location.title
});

export const transformLocations = data => {
  const mappedLocations = locations =>
    locations.map(location => transformLocationProps(location));
  if (data && data.length > 0) {
    return mappedLocations(data);
  }
  return [];
};

export const transformGeoLocations = data => {
  return transformLocationProps(data[0]);
};
