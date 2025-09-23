<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.2)
const { elRef: sectionRef3, isVisible: sectionVisible3 } = useScrollReveal(0.2)
</script>
<template>
  <section id="Projects" class="py-20 bg-gray-800/50">
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
            >My Projects</span
          >
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          A showcase of my professional work, technical contributions, and personal projects
          demonstrating expertise in project management and development
        </p>
      </div>
      <div
        ref="sectionRef2"
        class="grid md:grid-cols-2 gap-8"
        :style="
          sectionVisible2
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://www.oscarpabon.com/wp-content/uploads/2025/09/TenisZipaPrincipal.png"
              alt="Tenis web page"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://github.com/kildrax/TenisZipaRepo"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors"
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
                  class="lucide lucide-github w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
              ><a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors"
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
                  class="lucide lucide-external-link w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                Tenis Web Page | Personal Project
              </h3>
              <div class="flex items-center text-gray-400 text-sm">
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
                  class="lucide lucide-calendar w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                2025
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              A personal project in progress: a web platform that allows tennis players from
              Zipaquirá to quickly check their standing in the official ranking table. In the near
              future, the site will also enable the creation of matches where referees can record
              live set scores, ensuring the ranking table updates immediately once a match is
              completed.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Vue</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >JavaScript</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Tailwind CSS</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >SPA</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/kildrax/TenisZipaRepo"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-300"
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
                  class="lucide lucide-github w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Code</a
              ><a
                href="https://kildrax.github.io/TenisZipaRepo/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-lg transition-all duration-300"
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
                  class="lucide lucide-external-link w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                Live Page - Coming soon</a
              >
            </div>
          </div>
        </div>
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1666148670142-2f01b117e6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3J1bSUyMGFnaWxlJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzU3NTI2MzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Jira Project Management"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://cms-migration-tool.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors"
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
                  class="lucide lucide-external-link w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                Tenis Project Jira Dashboard | Personal Project
              </h3>
              <div class="flex items-center text-gray-400 text-sm">
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
                  class="lucide lucide-calendar w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                2022
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              Created a Jira dashboard as a complement to the tennis project, using it together with
              Confluence as a learning exercise. This demonstrates my ability to manage projects and
              effectively work with these tools.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Jira</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Project Management</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Scrum</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Confluence</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Agile</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://juliangallego.atlassian.net/jira/software/projects/TENIS/boards/1/backlog?atlOrigin=eyJpIjoiOGEyNDQwZTJmZmQzNDdlMjlhNmVjNDhmN2RjZjE2YWQiLCJwIjoiaiJ9"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-lg transition-all duration-300"
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
                  class="lucide lucide-external-link w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                Live Demo</a
              >
            </div>
          </div>
        </div>
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1716654718430-c7f54c3125c8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB1bmljZWZ8ZW58MXx8fHwxNzU3NTI2Mzc3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="UNICEF Chile"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://unicef.cl/dona"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors"
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
                  class="lucide lucide-external-link w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                UNICEF Chile | Donations Platform
              </h3>
              <div class="flex items-center text-gray-400 text-sm">
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
                  class="lucide lucide-calendar w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                2024 - 2025
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              CodeLar trusted me to lead the development of a donations platform for UNICEF Chile,
              this was a really cool project that allowed me to apply my skills in project
              management and development.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Project Management</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Scrum</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Drupal</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Stakeholder Management</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://unicef.cl/dona"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-lg transition-all duration-300"
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
                  class="lucide lucide-external-link w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                Live Page</a
              >
            </div>
          </div>
        </div>
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://www.oscarpabon.com/wp-content/uploads/2025/09/oscarPabonWebPage.png"
              alt="Web Page"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://github.com/kildrax/oscarPabon"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors"
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
                  class="lucide lucide-github w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a
              ><a
                href="https://www.oscarpabon.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors"
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
                  class="lucide lucide-external-link w-5 h-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                Oscar Pabón | Web Page
              </h3>
              <div class="flex items-center text-gray-400 text-sm">
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
                  class="lucide lucide-calendar w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                2024
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              I built a web page for Oscar Pabón, my uncle, a Colombian journalist from my natal
              city Villavicencio, Colombia. He is a journalist with over 50 years of experience in
              the field.
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >PHP</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >JavaScript</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >CSS</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >SCSS</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >WordPress</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/kildrax/oscarPabon"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-300"
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
                  class="lucide lucide-github w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Code</a
              ><a
                href="https://www.oscarpabon.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-lg transition-all duration-300"
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
                  class="lucide lucide-external-link w-4 h-4 mr-2"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                Live Page</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        ref="sectionRef3"
        class="text-center mt-16"
        :style="
          sectionVisible3
            ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
            : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
        "
      >
        <a
          href="https://github.com/kildrax"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:shadow-lg border border-gray-700 hover:border-gray-600"
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
            class="lucide lucide-github w-5 h-5 mr-3"
            aria-hidden="true"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            ></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
          >View All Projects on GitHub<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-external-link w-4 h-4 ml-2"
            aria-hidden="true"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
        ></a>
      </div>
    </div>
  </section>
</template>
