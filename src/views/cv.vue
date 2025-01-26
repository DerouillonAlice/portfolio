<template>
  <div class="text-white ">
    <div class="mb-8">
      <div class="relative mb-10 lg:pl-8">
        <h1 class="h1">Curriculum vitae</h1>
        <div class="absolute -bottom-4 lg:left-10  h-2 w-64 bg-primary rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div class="p-2 rounded-lg">
          <div class="relative mb-10">
            <h2 class=" text-xl lg:text-2xl font-bold text-white no-underline">Formations</h2>
            <div class="absolute -bottom-3 left-0 right-0 h-2 w-20 bg-primary rounded-full"></div>
          </div>
          <div class="mt-4 relative">
            <div class="absolute left-2 transform -translate-x-1/2 h-full border-l-2 border-primary"></div>
            <div class="flex flex-col gap-8">
              <div class="flex items-center gap-4">
                <div class="w-4 h-4 bg-primary rounded-full"></div>
                <div>
                  <h4 class="text-lg text-white font-bold">BUT MMI - Troyes</h4>
                  <p class="text-secondary">2023-2026</p>
                  <div class="flex gap-2 mt-2">
                    <!-- Icons for languages -->
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-4 h-4 bg-primary rounded-full"></div>
                <div>
                  <h4 class="text-lg text-white font-bold">Licence 1&2 Informatique - Université Paris 8</h4>
                  <p class="text-secondary">2021 - 2023</p>
                  <div class="flex gap-2 mt-2">
                    <i class="devicon-java-plain colored"></i>
                    <i class="devicon-kotlin-plain colored"></i>
                    <i class="devicon-android-plain colored"></i>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-4 h-4 bg-primary rounded-full"></div>
                <div>
                  <h4 class="text-lg text-white font-bold">Baccalauréat Spé Mathématiques & NSI - Mention AB</h4>
                  <p class="text-secondary">Juin 2021</p>
                  <div class="flex gap-2 mt-2">
                    <i class="devicon-nodejs-plain colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-mongodb-plain colored"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-lg mt-5 lg:mt-0">
          <div class="relative mb-10">
            <h2 class=" text-xl lg:text-2xl font-bold text-white no-underline">Expériences Professionelles</h2>
            <div class="absolute -bottom-3 left-0 right-0 h-2 w-20 bg-primary rounded-full"></div>
          </div>
          <div class="mt-4 relative">
            <div class="flex flex-col gap-8">
              <div class="flex items-start gap-4">
                <div class="w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 class="text-lg text-white font-bold">Agence de communication Zetruc</h4>
                  <p class="text-secondary">Sept. 2024 - Sept. 2026</p>
                  <p class="mt-2">Développement de sites web pour des clients locaux.</p>
                  <div class="flex gap-2 mt-2">
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                    <i class="devicon-javascript-plain colored"></i>
                  </div>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-4 h-4 bg-primary rounded-full mt-1"></div>
                <div>
                  <h4 class="text-lg text-white font-bold">Kinougarde - Babysitting</h4>
                  <p class="text-secondary">Sept. 2021 - Fev. 2023</p>
                  <p class="mt-2">Participation au développement d'une application mobile.</p>
                  <div class="flex gap-2 mt-2">
                    <i class="devicon-java-plain colored"></i>
                    <i class="devicon-kotlin-plain colored"></i>
                    <i class="devicon-android-plain colored"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
export default {};
</script>