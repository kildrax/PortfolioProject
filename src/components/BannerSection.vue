<script setup>
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <section id="Home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div
        class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-green-500/10"
      ></div>
    </div>
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl"
        style="transform: translateX(89.39px) translateY(-44.695px)"
      ></div>
      <div
        class="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 blur-xl"
        style="transform: translateX(-64.6507px) translateY(48.488px)"
      ></div>
    </div>
    <div class="container mx-auto px-6 text-center relative z-10">
      <div style="opacity: 1; transform: none">
        <h1 class="text-5xl md:text-7xl mb-6">
          <span
            class="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
            >Julian Gallego</span
          >
        </h1>
        <h2 class="text-2xl md:text-3xl text-gray-300 mb-8" style="opacity: 1; transform: none">
          Technical Project Manager • Product Owner • Scrum Master
        </h2>
        <p
          class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          style="opacity: 1; transform: none"
        >
          Driving digital transformation with 3+ years of experience in agile project management,
          product ownership for organizations like UNICEF, and 7+ years of technical experience as
          frontend developer. Let's bring your next project to life.
        </p>
        <div class="flex justify-center space-x-6 mb-12" style="opacity: 1; transform: none">
          <a
            href="https://github.com/kildrax"
            class="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300 group"
            aria-label="GitHub"
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors"
              aria-hidden="true"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
          ><a
            href="https://www.linkedin.com/in/julian-gallego-pabon-col/"
            target="_blank"
            class="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300 group"
            aria-label="LinkedIn"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors"
              aria-hidden="true"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle></svg></a
          ><a
            href="mailto:jcbest15@hotmail.com"
            class="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-300 group"
            aria-label="Email"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
          </a>
        </div>
        <button
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          @click="scrollToSection('Projects')"
        >
          Explore My Work<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-down ml-2 w-5 h-5"
            aria-hidden="true"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[bounceY_1.5s_ease-in-out_infinite]"
    >
      <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full mt-2"></div>
      </div>
    </div>
  </section>
</template>
