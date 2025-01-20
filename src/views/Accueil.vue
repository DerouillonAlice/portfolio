<template>
  <div class="text-white ">
    <div class="mb-8">
      <div class="relative mb-10 pl-8">
        <h1 class="text-4xl font-bold text-white no-underline">A propos</h1>
        <div class="absolute -bottom-4 left-10  h-2 w-36 bg-primary rounded-full"></div>
      </div>

      <p class="text-white leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis
        turpis mi, sit amet feugiat neque consequat ac. Curabitur interdum
        justo eget viverra vulputate. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Sed scelerisque vehicula efficitur. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nullam ut turpis dignissim, sodales lorem ut, placerat velit.
        Quisque feugiat nisi sed volutpat consequat. Etiam ac sem euismod,
        blandit risus sed, venenatis lectus. Nulla eleifend ut massa sit amet
        blandit. Duis ullamcorper lacinia felis sit amet pellentesque.
      </p>
    </div>

    <div>
      <div class="relative mb-8">
        <h1 class="text-2xl font-bold text-white no-underline">Compétances</h1>
        <div class="absolute -bottom-3 left-0 right-0 h-2 w-20 bg-primary rounded-full"></div>
      </div>
      <div class="">
        <h3 class="text-md text-secondary ">DEVELOPPEMENT WEB</h3>
        <div class="relative mt-3">
          <div class="flex items-center justify-center space-x-4 overflow-x-scroll scrollbar-hide">
            <div v-for="(icon, index) in devIcons" :key="index"
              class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col items-center w-36">
              <i :class="['fas', icon.name, 'w-12', 'h-12', 'text-primary']"></i>
              <p class="mt-4 text-white font-medium">{{ icon.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-2">
        <h3 class="text-md text-secondary mb-4">AUTRE</h3>
        <div class="relative">
          <div class="flex items-center justify-center space-x-4 overflow-x-scroll scrollbar-hide">
            <div v-for="(icon, index) in otherIcons" :key="index"
              class="flex-shrink-0 bg-background2 p-6 rounded-lg flex flex-col items-center w-36">
              <i :class="['fas', icon.name, 'w-12', 'h-12', 'text-primary']"></i>
              <p class="mt-4 text-gray-200 font-medium">{{ icon.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devIcons: [
        { name: 'code', label: "VueJS" },
        { name: 'laptop-code', label: "Tailwind CSS" },
        { name: 'wordpress', label: "WordPress" },
        { name: 'php', label: "PHP" },
        { name: 'js', label: "JavaScript" },
      ],
      otherIcons: [
        { name: 'adobe', label: "Photoshop" },
        { name: 'figma', label: "Figma" },
        { name: 'adobe-illustrator', label: "Illustrator" },
      ],
    };
  }
};
</script>


