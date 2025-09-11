<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.2)
</script>
<template>
  <section id="contact" class="pt-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <div
        ref="sectionRef"
        class="text-center mb-16"
        :style="
          sectionVisible
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <h2 class="text-4xl md:text-5xl mb-6">
          <span class="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
            >Let's Connect</span
          >
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to discuss your next digital project? I'd love to collaborate with you. Let's
          explore how we can drive success through agile project management and technical
          excellence.
        </p>
      </div>
      <div
        ref="sectionRef2"
        class="max-w-4xl mx-auto"
        :style="
          sectionVisible2
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <h3 class="text-2xl mb-12 text-center text-white">Get in Touch</h3>
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:your.email@example.com"
            class="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group text-center"
            ><div
              class="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-mail w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>
            <p class="text-gray-400 text-sm mb-1">Email</p>
            <p class="text-white">your.email@example.com</p></a
          ><a
            href="tel:+57XXXXXXXXX"
            class="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group text-center"
            ><div
              class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-phone w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path
                  d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                ></path>
              </svg>
            </div>
            <p class="text-gray-400 text-sm mb-1">Phone</p>
            <p class="text-white">+57 (XXX) XXX-XXXX</p></a
          ><a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group text-center"
            ><div
              class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-map-pin w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <p class="text-gray-400 text-sm mb-1">Location</p>
            <p class="text-white">Latin America &amp; Caribbean</p></a
          >
        </div>
        <div class="text-center">
          <h4 class="text-lg text-white mb-6">Connect With Me</h4>
          <div class="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:text-white group"
              aria-label="GitHub"
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
                class="lucide lucide-github w-6 h-6 text-gray-400 group-hover:scale-110 transition-all duration-300"
                aria-hidden="true"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                ></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
            ><a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:text-blue-400 group"
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
                class="lucide lucide-linkedin w-6 h-6 text-gray-400 group-hover:scale-110 transition-all duration-300"
                aria-hidden="true"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg></a
            ><a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:text-blue-400 group"
              aria-label="Twitter"
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
                class="lucide lucide-twitter w-6 h-6 text-gray-400 group-hover:scale-110 transition-all duration-300"
                aria-hidden="true"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path></svg
            ></a>
          </div>
        </div>
        <div
          class="mt-12 p-6 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600 text-center"
        >
          <h4 class="text-lg text-white mb-2">📧 Quick Response Guarantee</h4>
          <p class="text-gray-300">
            I respond to all professional inquiries within 24 hours. For urgent project matters,
            please reach out via email or LinkedIn for fastest response.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
