<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.2)
const { elRef: sectionRef3, isVisible: sectionVisible3 } = useScrollReveal(0.2)
const { elRef: sectionRef4, isVisible: sectionVisible4 } = useScrollReveal(0.2)
</script>
<template>
  <section id="Collaboration" class="py-20 bg-gray-800">
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
            >Let's Collaborate</span
          >
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          I partner with organizations to drive successful digital initiatives through expert
          project management, agile methodologies, and technical leadership. Let's create impactful
          solutions together.
        </p>
      </div>
      <div
        ref="sectionRef2"
        class="grid lg:grid-cols-3 gap-8 mb-16"
        :style="
          sectionVisible2
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div
          class="bg-gray-900/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20"
        >
          <div
            class="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6"
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
              class="lucide lucide-target w-8 h-8 text-white"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h3 class="text-2xl text-white mb-4">Project Management Consulting</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Strategic guidance for digital transformation initiatives, process optimization, and
            agile implementation.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Agile transformation roadmaps</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Process assessment &amp; optimization</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Team coaching &amp; mentoring</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Stakeholder alignment strategies</span>
            </li>
          </ul>
        </div>
        <div
          class="bg-gray-900/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20"
        >
          <div
            class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6"
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
          <h3 class="text-2xl text-white mb-4">Technical Leadership</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Hands-on leadership for technical projects combining project management expertise with
            development knowledge.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Cross-functional team leadership</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Technical project planning</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Solution design & implementation guidance</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Quality assurance processes</span>
            </li>
          </ul>
        </div>
        <div
          class="bg-gray-900/50 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20"
        >
          <div
            class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6"
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
              class="lucide lucide-lightbulb w-8 h-8 text-white"
              aria-hidden="true"
            >
              <path
                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
              ></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
          </div>
          <h3 class="text-2xl text-white mb-4">Product Strategy &amp; Ownership</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Product vision definition, backlog management, and user-centered approach to digital
            solutions.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Product roadmap development</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">User story creation &amp; prioritization</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">Stakeholder requirement gathering</span>
            </li>
            <li class="flex items-start">
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
                class="lucide lucide-circle-check-big w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <span class="text-gray-300">MVP definition &amp; delivery</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref="sectionRef3"
        class="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-600"
        :style="
          sectionVisible3
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div class="flex items-center mb-4">
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
                class="lucide lucide-rocket w-8 h-8 text-orange-400 mr-3"
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
              <h3 class="text-2xl text-white">Ready to Work With</h3>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed">
              I specialize in working with organizations that value innovation, impact, and
              excellence in project delivery. My experience spans various sectors and organizational
              sizes.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center">
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
                  class="lucide lucide-arrow-right w-5 h-5 text-orange-400 mr-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span class="text-gray-300">International Organizations (NGOs, UN agencies)</span>
              </li>
              <li class="flex items-center">
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
                  class="lucide lucide-arrow-right w-5 h-5 text-orange-400 mr-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span class="text-gray-300">Tech Startups &amp; Scale-ups</span>
              </li>
              <li class="flex items-center">
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
                  class="lucide lucide-arrow-right w-5 h-5 text-orange-400 mr-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span class="text-gray-300">Professional Initiatives</span>
              </li>
              <li class="flex items-center">
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
                  class="lucide lucide-arrow-right w-5 h-5 text-orange-400 mr-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span class="text-gray-300">Educational Institutions</span>
              </li>
              <li class="flex items-center">
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
                  class="lucide lucide-arrow-right w-5 h-5 text-orange-400 mr-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <span class="text-gray-300">Digital Transformation Projects</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
            <h4 class="text-xl text-white mb-4">My Approach</h4>
            <div class="space-y-4">
              <div class="flex items-start">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <span class="text-white text-sm">1</span>
                </div>
                <div>
                  <h5 class="text-white mb-1">Understand &amp; Align</h5>
                  <p class="text-gray-400 text-sm">
                    Deep dive into your goals, stakeholders, and constraints
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <span class="text-white text-sm">2</span>
                </div>
                <div>
                  <h5 class="text-white mb-1">Plan &amp; Structure</h5>
                  <p class="text-gray-400 text-sm">
                    Implement agile frameworks like Scrum to your organization
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                >
                  <span class="text-white text-sm">3</span>
                </div>
                <div>
                  <h5 class="text-white mb-1">Execute &amp; Deliver</h5>
                  <p class="text-gray-400 text-sm">
                    Lead implementation with continuous feedback and improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="sectionRef4"
        class="text-center mt-16"
        :style="
          sectionVisible4
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div
          class="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-8 rounded-2xl border border-orange-500/20"
        >
          <h3 class="text-2xl text-white mb-4">Start Your Project Today</h3>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're planning a digital transformation, need agile coaching, or require
            technical project leadership, I'm here to help you succeed. Let's discuss your project
            requirements.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#Contact"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >Get In Touch<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right w-5 h-5 ml-2"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path></svg></a
            ><a
              href="mailto:jcbest15@hotmail.com"
              class="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
              >Send Direct Email</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
