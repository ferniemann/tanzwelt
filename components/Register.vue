<template>
  <form class="w-fit" @submit.prevent>
    <div class="grid w-fit">
      <span class="font-bold">Für welchen Kurs meldest du dich an?</span>
      <select name="course" id="course" v-model="form.chosenCourse" class="py-2 px-6 border border-gray-300 rounded"
        :disabled="isCourseExplicit">
        <option v-for="singleCourse in courseList" :value="singleCourse">
          {{ singleCourse }}
        </option>
      </select>
    </div>
    <div class="my-8">
      <span class="font-bold">Wen möchtest du anmelden?</span>
      <div class="flex gap-2">
        <input type="radio" name="person" id="single"
          class="sr-only [&:checked+label]:bg-rose-100 [&:checked+label]:border-rose-900 [&:checked+label]:font-bold"
          v-model="form.withPartner" :value="false" required>
        <label for="single" class="bg-white py-2 px-6 border-2 rounded">Nur mich</label>
        <input type="radio" name="person" id="both"
          class="sr-only [&:checked+label]:bg-rose-100 [&:checked+label]:border-rose-900 [&:checked+label]:font-bold"
          v-model="form.withPartner" :value="true" required>
        <label for="both" class="bg-white py-2 px-6 border-2 rounded">Mich und mein/e Partner/in</label>
      </div>
    </div>
    <div>
      <span class="font-bold">{{ form.withPartner ? "Gib bitte eure beiden Namen an:" : "Gib bitte deinen Namen an:"
        }}</span>
      <div>
        <div class="flex flex-col">
          <label for="name-anmelder" class="text-sm">
            Dein Name (Vorname und Nachname)
          </label>
          <input type="text" name="name-anmelder" id="name-anmelder"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
        </div>
        <div v-if="form.withPartner" class="flex flex-col my-8">
          <label for="name-partner" class="text-sm">
            Dein/e Partner/in (Vorname und Nachname)
          </label>
          <input type="text" name="name-partner" id="name-partner"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
        </div>
      </div>
    </div>
    <div class="my-8">
      <span class="font-bold">Wie können wir {{ form.withPartner ? "euch" : "dich" }} erreichen?</span>
      <div>
        <div class="flex flex-col">
          <label for="name-anmelder" class="text-sm">
            E-Mail-Adresse
          </label>
          <input type="text" name="name-anmelder" id="name-anmelder"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
        </div>
        <div class="flex flex-col my-4">
          <label for="name-partner" class="text-sm">
            Handynummer
          </label>
          <input type="phone" name="name-partner" id="name-partner"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
        </div>
      </div>
    </div>
    <div class="my-8">
      <span class="font-bold">Bitte bestätige abschließend noch Folgendes:</span>
      <div>
        <div class="flex items-baseline gap-2">
          <input type="checkbox" name="datenschutz" id="datenschutz"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
          <label for="datenschutz" class="text-sm">
            Ich habe die <a href="/datenschutz" target="_blank">Datenschutzerklärung</a> gelesen und akzeptiert.
            Insbesondere stimme ich der Verarbeitung meiner eingegebenen Daten zum Zwecke der Kursanmeldung zu. Diese
            Zustimmung kann ich jederzeit formlos per E-Mail an ludwigstanzwelt@gmail.com zurücknehmen.
          </label>
        </div>
        <div class="flex items-baseline gap-2 mt-4">
          <input type="checkbox" name="datenschutz" id="agb"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
          <label for="agb" class="text-sm">
            Ich habe die <a href="/agb" target="_blank">Allgemeinen Geschäftsbedingungen</a> gelesen und akzeptiert.
          </label>
        </div>
        <div class="flex items-baseline gap-2 mt-4">
          <input type="checkbox" name="datenschutz" id="honorar"
            class="bg-white p-2 text-base focus:border-red-900 border-2 rounded" required>
          <label for="honorar" class="text-sm">
            Ich akzeptiere, dass bei Nichteinhaltung der Unterrichtsstunden durch den Kursteilnehmer das Honorar nicht
            zurückerstattet wird.
          </label>
        </div>
      </div>
    </div>
    <button class="btn btn-primary bg-rose-900 border-rose-900 hover:bg-white hover:text-rose-900">Abschicken</button>
  </form>
</template>

<script setup>
import { courses } from '~/data/courses';

const courseList = courses.map((course) => course.title)

const props = defineProps(["course"])

const isCourseExplicit = computed(() => courseList.includes(props.course))

const form = ref({
  chosenCourse: isCourseExplicit ? props.course : "",
  withPartner: false,
  person: "",
  partner: ""
})
</script>