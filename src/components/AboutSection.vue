<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.2)
const { elRef: sectionRef3, isVisible: sectionVisible3 } = useScrollReveal(0.2)
</script>
<template>
  <section id="about" class="py-20 bg-gray-800/50">
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
            >About Me</span
          >
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate Technical Project Manager and Product Owner with a proven track record of
          delivering impactful digital solutions for international organizations. I combine
          technical expertise with agile leadership to drive successful project outcomes.
        </p>
      </div>
      <div
        ref="sectionRef2"
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        :style="
          sectionVisible2
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div class="group">
          <div
            class="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-users w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 class="text-xl mb-4 text-white">Agile Leadership</h3>
            <p class="text-gray-400 leading-relaxed">
              Expert in Scrum, Kanban, and agile methodologies with certified expertise
            </p>
          </div>
        </div>
        <div class="group">
          <div
            class="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-rocket w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path
                  d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                ></path>
                <path
                  d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                ></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <h3 class="text-xl mb-4 text-white">Product Management</h3>
            <p class="text-gray-400 leading-relaxed">
              Strategic product ownership with focus on user value and business outcomes
            </p>
          </div>
        </div>
        <div class="group">
          <div
            class="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-code-xml w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <h3 class="text-xl mb-4 text-white">Technical Skills</h3>
            <p class="text-gray-400 leading-relaxed">
              Strong technical background in web development and CMS platforms
            </p>
          </div>
        </div>
        <div class="group">
          <div
            class="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
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
                class="lucide lucide-palette w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path
                  d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
                ></path>
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
            </div>
            <h3 class="text-xl mb-4 text-white">Innovation</h3>
            <p class="text-gray-400 leading-relaxed">
              Creative problem-solving and continuous improvement mindset
            </p>
          </div>
        </div>
      </div>
      <div
        ref="sectionRef3"
        class="mt-20 bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 md:p-12 rounded-2xl border border-gray-700"
        :style="
          sectionVisible3
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl md:text-3xl mb-6 text-white">My Journey</h3>
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            With over 8 years of experience in project management and product ownership, I've led
            digital transformation initiatives for organizations like UNICEF Chile, Ecuador, and
            LACRO. My approach combines agile methodologies with technical expertise to deliver
            solutions that create meaningful impact for users and stakeholders.
          </p>
          <p class="text-lg text-gray-300 leading-relaxed">
            Beyond professional work, I've demonstrated leadership by creating and leading the first
            official street dance program at Universidad Piloto de Colombia. I believe in continuous
            learning, team empowerment, and staying current with industry best practices in agile
            project management and emerging technologies.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
