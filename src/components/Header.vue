<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const activeSection = ref('Home')
const mobileMenuOpen = ref(false)

const sections = ['Home', 'About', 'Experience', 'Collaboration', 'Projects', 'Contact']

const handleScroll = () => {
  scrolled.value = window.scrollY > 0

  // Get current scroll position
  const scrollPosition = window.scrollY + 100 // Add offset for header height

  // Find the active section
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      break
    }
  }
}

const isActive = (sectionName) => {
  return activeSection.value === sectionName
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Set initial active section
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 transition-all duration-300',
      scrolled
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg z-50'
        : 'bg-gray-900/80 backdrop-blur-sm md:bg-transparent z-50',
      mobileMenuOpen ? 'z-30' : 'z-50',
    ]"
  >
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img
            src="https://www.oscarpabon.com/wp-content/uploads/2025/09/oldMe.jpg"
            alt="Personal Logo"
            class="w-12 h-12 rounded-lg"
          /><span
            class="text-xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
            >Portfolio</span
          >
        </div>
        <nav class="hidden md:flex items-center space-x-8">
          <a
            href="#Home"
            :class="[
              'relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 cursor-pointer',
              isActive('Home') ? 'text-orange-400' : 'text-gray-300',
            ]"
          >
            Home
            <div
              v-if="isActive('Home')"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300"
            ></div>
          </a>
          <a
            href="#About"
            :class="[
              'relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 cursor-pointer',
              isActive('About') ? 'text-orange-400' : 'text-gray-300',
            ]"
          >
            About
            <div
              v-if="isActive('About')"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300"
            ></div>
          </a>
          <a
            href="#Experience"
            :class="[
              'relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 cursor-pointer',
              isActive('Experience') ? 'text-orange-400' : 'text-gray-300',
            ]"
          >
            Experience
            <div
              v-if="isActive('Experience')"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300"
            ></div>
          </a>
          <a
            href="#Collaboration"
            :class="[
              'relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 cursor-pointer',
              isActive('Collaboration') ? 'text-orange-400' : 'text-gray-300',
            ]"
          >
            Collaboration
            <div
              v-if="isActive('Collaboration')"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300"
            ></div>
          </a>
          <a
            href="#Projects"
            :class="[
              'relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 cursor-pointer',
              isActive('Projects') ? 'text-orange-400' : 'text-gray-300',
            ]"
          >
            Projects
            <div
              v-if="isActive('Projects')"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300"
            ></div>
          </a>
          <a
            href="#Contact"
            :class="[
              'relative px-4 py-2 transition-colors duration-200 hover:text-orange-400 cursor-pointer',
              isActive('Contact') ? 'text-orange-400' : 'text-gray-300',
            ]"
          >
            Contact
            <div
              v-if="isActive('Contact')"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-300"
            ></div>
          </a>
        </nav>
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-300 hover:text-orange-400 transition-colors relative z-50"
        >
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
            :class="[
              'transition-transform duration-300',
              mobileMenuOpen ? 'rotate-90' : 'rotate-0',
            ]"
            aria-hidden="true"
          >
            <path v-if="!mobileMenuOpen" d="M4 12h16"></path>
            <path v-if="!mobileMenuOpen" d="M4 18h16"></path>
            <path v-if="!mobileMenuOpen" d="M4 6h16"></path>
            <path v-if="mobileMenuOpen" d="M18 6 6 18"></path>
            <path v-if="mobileMenuOpen" d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Menu -->
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-[45] md:hidden" @click="closeMobileMenu">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <nav
      :class="[
        'fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gray-900 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="flex flex-col h-full">
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-700">
          <span
            class="text-xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
          >
            Navigation
          </span>
          <button
            @click="closeMobileMenu"
            class="p-2 text-gray-300 hover:text-orange-400 transition-colors"
          >
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
              class="w-6 h-6"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Items -->
        <div class="flex-1 py-6">
          <div class="space-y-2 px-6">
            <a
              v-for="section in sections"
              :key="section"
              :href="`#${section}`"
              @click="closeMobileMenu"
              :class="[
                'flex items-center px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer group',
                isActive(section)
                  ? 'bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400'
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-orange-400',
              ]"
            >
              <div
                v-if="isActive(section)"
                class="w-1 h-6 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full mr-3"
              ></div>
              <div v-else class="w-1 h-6 bg-transparent mr-3"></div>
              <span class="text-lg font-medium">{{ section }}</span>
              <svg
                v-if="isActive(section)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5 ml-auto text-orange-400"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Mobile Menu Footer -->
        <div class="p-6 border-t border-gray-700">
          <div class="text-center">
            <p class="text-sm text-gray-400 mb-2">Ready to collaborate?</p>
            <a
              href="#Contact"
              @click="closeMobileMenu"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-xl transition-all duration-300 font-medium"
            >
              Get In Touch
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
                class="w-4 h-4 ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
