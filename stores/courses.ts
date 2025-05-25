import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", () => {
  const courses = ref<any[]>([]);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);
  const singleCourse = ref({}) as any;

  async function getAllCourses() {
    isLoading.value = true;
    error.value = null;

    try {
      const res = await $fetch<{ data: any[] }>("/api/kurse");
      courses.value = res.data;
    } catch (err) {
      error.value = err as Error;
      courses.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  async function getCourseById(id: string | number) {
    isLoading.value = true;
    error.value = null;

    try {
      const res = await $fetch(`/api/kurse/${id}`);
      singleCourse.value = res;
    } catch (err) {
      error.value = err as Error;
      singleCourse.value = null;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    courses,
    isLoading,
    error,
    singleCourse,
    getAllCourses,
    getCourseById,
  };
});
