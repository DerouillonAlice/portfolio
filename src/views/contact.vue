<template>
  <div class="text-white">
    <div class="relative mb-10 lg:pl-8">
      <h1 class="h1">Contact</h1>
      <div class="absolute -bottom-4 lg:left-10 h-2 w-36 bg-primary rounded-full"></div>
    </div>


    <section class="text-gray-400  body-font relative" id="contact">

      <div class="container md:px-5  mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0"
            marginwidth="0" scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42472.70454231684!2d4.034934979116988!3d48.29238734258561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee9857e787b7b1%3A0x57dd125566e84f75!2s10000%20Troyes!5e0!3m2!1sfr!2sfr!4v1737891293073!5m2!1sfr!2sfr"
            style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe>
          <div class="bg-background relative flex flex-wrap py-6 px-8 rounded shadow-md">
            <div class="lg:w-1/3">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">LOCALISATION</h2>
              <p class="mt-1">10000 Troyes<br> Grand-Est FR</p>
            </div>
            <div class="lg:w-2/3 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a class="text-primary leading-relaxed" href="mailto:contact@alicedr.com">contact@alicedr.com</a>
              <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <a class="text-primary leading-relaxed" href="tel:+33780981337">+33 7 80 98 13 37</a>
            </div>
          </div>
        </div>

        <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form action="https://formspree.io/f/mvolnkwp" method="post">
            <h2 class="text-white text-lg mb-1 font-medium title-font">Contactez-moi</h2>
            <p class="leading-relaxed mb-5">Si vous aimez mon travail et que vous souhaitez bénéficier de mes
              services, envoyez-moi un message via le formulaire de contact.</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-400">Nom</label>
              <input type="text" id="name" name="name"
                class="w-full bg-background2 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email"
                class="w-full bg-background2 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message"
                class="w-full bg-background2 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div class="relative mb-4">
              <div class="g-recaptcha" data-theme="dark" data-sitekey="6LdT8oogAAAAACNJQKiTRAQ0mzuo6Tmysg0YHsD1">
              </div>
            </div>
            <button type="submit"
              class="text-white bg-background2 border-0 py-2 px-6 transition-all focus:outline-none hover:bg-primary rounded-full md:text-lg">Envoyer</button>

          </form>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

