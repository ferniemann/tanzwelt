export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Kurs-ID fehlt" });
  }

  interface CourseResponse {
    data: any; // Replace 'any' with the actual type if known
  }

  const course = await $fetch<CourseResponse>(
    `https://admin.ludwigs-tanzwelt.de/items/Tanzkurse/${id}`,
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

  return course.data;
});
