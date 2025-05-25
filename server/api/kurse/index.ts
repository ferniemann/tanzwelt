export default defineEventHandler(async () => {
  const response = await $fetch(
    `https://admin.ludwigs-tanzwelt.de/items/Tanzkurse`,
    {
      query: {
        fields: [
          "*",
          "standort.id",
          "standort.name_des_standortes",
          "standort.adresse",
          "kurstermine.id",
          "kurstermine.wochentag",
          "kurstermine.start_uhrzeit",
          "kurstermine.end_uhrzeit",
        ].join(","),
        deep: {
          standort: "*",
          kurstermine: "*",
        },
      },
    }
  );

  return response;
});
