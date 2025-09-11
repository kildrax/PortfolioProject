<script setup></script>
<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img
            src="../assets/images/LogoKildraxTwitch.png"
            alt="Personal Logo"
            class="w-12 h-12 rounded-lg"
          /><span
            class="text-xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
            >Portfolio</span
          >
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <button
            class="relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 text-orange-400"
          >
            Home
            <div
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
            ></div></button
          ><button
            class="relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 text-gray-300"
          >
            About</button
          ><button
            class="relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 text-gray-300"
          >
            Experience</button
          ><button
            class="relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 text-gray-300"
          >
            Collaboration</button
          ><button
            class="relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 text-gray-300"
          >
            Projects</button
          ><button
            class="relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 text-gray-300"
          >
            Contact
          </button>
        </div>
        <button class="md:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
            aria-hidden="true"
          >
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
            <path d="M4 6h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>
