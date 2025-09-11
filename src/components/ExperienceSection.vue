<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.2)
</script>
<template>
  <section id="experience" class="py-20 bg-gray-900">
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
              <div
                class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <h4 class="text-xl text-white mb-2">Technical Project Manager</h4>
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
                    Panama City, Panama </span
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
                    2021 - Present</span
                  >
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                  Lead technical project management for digital initiatives across Latin America and
                  Caribbean region. Manage cross-functional teams and ensure successful delivery of
                  digital solutions for child protection programs.
                </p>
                <div class="space-y-1">
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Successfully delivered 12+ digital
                    projects
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Managed budgets exceeding $500K
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Improved project delivery time by 30%
                  </p>
                </div>
              </div>
            </div>
            <div
              class="relative pl-8 border-l-2 border-gray-700 hover:border-orange-400 transition-colors duration-300"
            >
              <div
                class="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
              ></div>
              <div
                class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <h4 class="text-xl text-white mb-2">Product Owner &amp; Scrum Master</h4>
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
                    Quito, Ecuador</span
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
                    2019 - 2021</span
                  >
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                  Served as Product Owner and Scrum Master for digital platform development.
                  Collaborated with stakeholders to define product vision and managed agile
                  development processes.
                </p>
                <div class="space-y-1">
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Led agile transformation initiative
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Increased team velocity by 45%
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Managed product backlog for 3 major
                    platforms
                  </p>
                </div>
              </div>
            </div>
            <div
              class="relative pl-8 border-l-2 border-gray-700 hover:border-orange-400 transition-colors duration-300"
            >
              <div
                class="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
              ></div>
              <div
                class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
              >
                <h4 class="text-xl text-white mb-2">Technical Project Manager</h4>
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
                    Santiago, Chile</span
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
                    2017 - 2019</span
                  >
                </div>
                <p class="text-gray-300 mb-4 leading-relaxed">
                  Managed technical projects focused on child welfare systems and digital
                  communication platforms. Coordinated with government agencies and international
                  partners.
                </p>
                <div class="space-y-1">
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Delivered child protection platform
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Facilitated stakeholder workshops
                  </p>
                  <p class="text-sm text-gray-400 flex items-start">
                    <span class="text-green-400 mr-2">✓</span>Established agile practices
                  </p>
                </div>
              </div>
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
            <div
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Scrum Product Owner Certified (SPOC)</h4>
                  <p class="text-gray-400 mb-2">SCRUMstudy</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >2025</span
                  >
                </div>
              </div>
            </div>
            <div
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🏆
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Scrum Master Certified (SMC)</h4>
                  <p class="text-gray-400 mb-2">SCRUMstudy</p>
                  <span
                    class="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 text-orange-400 rounded-full text-sm"
                    >2025</span
                  >
                </div>
              </div>
            </div>
            <div
              class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div class="flex items-start space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <div class="flex-1">
                  <h4 class="text-lg text-white mb-1">Scrum Fundamentals Certified (SFC)</h4>
                  <p class="text-gray-400 mb-2">SCRUMstudy</p>
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
                  📊
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
            <h4 class="text-lg text-white mb-4">Core Technologies</h4>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Scrum</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Agile</span
              ><span
                class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Jira</span
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
