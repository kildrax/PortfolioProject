<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.1)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.1)
</script>
<template>
  <section id="Experience" class="py-20 bg-gray-900">
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
            >Experience &amp; Certifications</span
          >
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          My professional journey and achievements in the tech industry
        </p>
      </div>
      <div
        ref="sectionRef2"
        class="grid lg:grid-cols-2 gap-12"
        :style="
          sectionVisible2
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div>
          <h3 class="text-2xl mb-8 flex items-center text-white">
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
              class="lucide lucide-briefcase w-6 h-6 mr-3 text-orange-400"
              aria-hidden="true"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            Professional Experience
          </h3>
          <div class="space-y-8">
            <div
              class="relative pl-8 border-l-2 border-gray-700 hover:border-orange-400 transition-colors duration-300"
            >
              <div
                class="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
              ></div>
              <a
                href="https://unicef.cl/dona"
                target="_blank"
                class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400/50 hover:shadow-orange-400/25 transition-all duration-300 hover:shadow-lg block"
              >
                <h4 class="text-xl text-white mb-2">
                  Technical Project Manager | Product Owner | Scrum Master
                </h4>
                <div class="flex flex-wrap items-center gap-4 mb-3 text-gray-400">
                  <span class="flex items-center"
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
                      class="lucide lucide-briefcase w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    UNICEF Chile</span
                  ><span class="flex items-center"
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
                      class="lucide lucide-map-pin w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    CodeLar</span
                  ><span class="flex items-center"
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
                      class="lucide lucide-calendar w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    04/2023 - 06/2025</span
                  >
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                  Led the project from scratch with a cross-functional development team. Managed the
                  entire project lifecycle using Scrum methodology in ClickUp.
                </p>
                <div class="space-y-1">
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Led the development of the MVP
                    donation web platform.
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Successfully migrated the platform to
                    Acquia Cloud, ensuring minimal downtime.
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Integrated multiple payment gateways
                    to expand donor options.
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Secured a new partnership with UNICEF
                    Chile thanks to the success of the MVP.
                  </p>
                </div>
              </a>
            </div>
            <div
              class="relative pl-8 border-l-2 border-gray-700 hover:border-orange-400 transition-colors duration-300"
            >
              <div
                class="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
              ></div>
              <a
                href="https://help.unicef.org/lac/panama/donar"
                target="_blank"
                class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-lg block hover:border-orange-400/50 hover:shadow-orange-400/25"
              >
                <h4 class="text-xl text-white mb-2">
                  Technical Project Manager | Product Owner | Scrum Master
                </h4>
                <div class="flex flex-wrap items-center gap-4 mb-3 text-gray-400">
                  <span class="flex items-center"
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
                      class="lucide lucide-briefcase w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    UNICEF LACRO</span
                  ><span class="flex items-center"
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
                      class="lucide lucide-map-pin w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    CodeLar </span
                  ><span class="flex items-center"
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
                      class="lucide lucide-calendar w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    04/2023 - 06/2025</span
                  >
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                  Served as the main technical project manager, product owner, and scrum master for
                  a regional cluster spanning multiple Central American countries. Oversaw the
                  coordination of requirements across nations and ensured smooth adoption of the
                  unified platform.
                </p>
                <div class="space-y-1">
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Directed the seamless migration of the
                    regional cluster to the global CMS.
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Ensured clear communication with
                    cluster leaders, improving coordination across multiple countries
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Achieved successful integration of
                    multiple payment gateways across the region.
                  </p>
                </div>
              </a>
            </div>
            <div
              class="relative pl-8 border-l-2 border-gray-700 hover:border-orange-400 transition-colors duration-300"
            >
              <div
                class="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
              ></div>
              <a
                href="https://unicef.org.ec/"
                target="_blank"
                class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-lg block hover:border-orange-400/50 hover:shadow-orange-400/25"
              >
                <h4 class="text-xl text-white mb-2">
                  Technical Project Manager | Product Owner | Scrum Master
                </h4>
                <div class="flex flex-wrap items-center gap-4 mb-3 text-gray-400">
                  <span class="flex items-center"
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
                      class="lucide lucide-briefcase w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    UNICEF Ecuador</span
                  ><span class="flex items-center"
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
                      class="lucide lucide-map-pin w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    CodeLar</span
                  ><span class="flex items-center"
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
                      class="lucide lucide-calendar w-4 h-4 mr-1"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    04/2023 - 06/2025</span
                  >
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                  Acted as Technical Project Manager, Product Owner, and Scrum Master for the
                  development of UNICEF Ecuador’s digital donation platform. Worked closely with
                  stakeholders to define product vision, prioritize features, and manage agile
                  delivery.
                </p>
                <div class="space-y-1">
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Successfully migrated legacy systems
                    to Acquia Cloud Platform.
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Delivered key UI improvements to the
                    donor webform, enhancing user experience.
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Oversaw the integration of multiple
                    payment gateways to support local payment methods.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-2xl mb-8 flex items-center text-white">
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
              class="lucide lucide-award w-6 h-6 mr-3 text-green-400"
              aria-hidden="true"
            >
              <path
                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
              ></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            Certifications
          </h3>
          <div class="grid gap-6">
            <a
              href="https://www.scrum.org/certificates/1285209"
              target="_blank"
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📜
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Professional Scrum Master (PSM I)</h4>
                  <p class="text-gray-400 mb-2">Scrum.org</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >01/2026</span
                  >
                </div>
              </div>
            </a>
            <a
              href="https://www.scrumstudy.com/certification/verify?type=SPOC&number=1101153"
              target="_blank"
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📜
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Scrum Product Owner Certified (SPOC)</h4>
                  <p class="text-gray-400 mb-2">SCRUMstudy</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >08/2025</span
                  >
                </div>
              </div>
            </a>
            <a
              href="https://www.scrumstudy.com/certification/verify?type=SMC&number=1077245"
              target="_blank"
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📜
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Scrum Master Certified (SMC)</h4>
                  <p class="text-gray-400 mb-2">SCRUMstudy</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >05/2025</span
                  >
                </div>
              </div>
            </a>
            <a
              href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1051096"
              target="_blank"
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20 group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📜
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Scrum Fundamentals Certified (SFC)</h4>
                  <p class="text-gray-400 mb-2">SCRUMstudy</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >10/2024</span
                  >
                </div>
              </div>
            </a>
            <div
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📜
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Diploma in Project Management (PMI/PMP)</h4>
                  <p class="text-gray-400 mb-2">Universidad Distrital</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >2024</span
                  >
                </div>
              </div>
            </div>
            <div
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎓
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Systems Engineer</h4>
                  <p class="text-gray-400 mb-2">Universidad Piloto de Colombia</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >2016</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-8 bg-gradient-to-r from-gray-800/80 to-gray-700/80 p-6 rounded-xl border border-gray-600"
          >
            <h4 class="text-lg text-white mb-4">Core Knowledge</h4>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Scrum</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Agile</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >ClickUp</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >WordPress</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Drupal</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >HTML/CSS</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >JavaScript</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Git</span
              >
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Hubspot</span
              >
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Acquia</span
              >
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Jira</span
              >
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Confluence</span
              >
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Asana</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
