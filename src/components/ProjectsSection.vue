<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
const { elRef: sectionRef2, isVisible: sectionVisible2 } = useScrollReveal(0.2)
const { elRef: sectionRef3, isVisible: sectionVisible3 } = useScrollReveal(0.2)
</script>
<template>
  <section id="projects" class="py-20 bg-gray-800/50">
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
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            class="px-6 py-2 rounded-full transition-all duration-300 bg-gradient-to-r from-orange-400 to-yellow-400 text-black"
          >
            All Projects</button
          ><button
            class="px-6 py-2 rounded-full transition-all duration-300 bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            Professional</button
          ><button
            class="px-6 py-2 rounded-full transition-all duration-300 bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            Technical</button
          ><button
            class="px-6 py-2 rounded-full transition-all duration-300 bg-gray-700 text-gray-300 hover:bg-gray-600"
          >
            Personal
          </button>
        </div>
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
              src="https://images.unsplash.com/photo-1716654718430-c7f54c3125c8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB1bmljZWZ8ZW58MXx8fHwxNzU3NTI2Mzc3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="UNICEF Digital Platform"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://github.com/youruser/unicef-platform"
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
                href="https://unicef-lacro-platform.org"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
              ></a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                UNICEF Digital Platform
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
                  <path d="M3 10h18"></path></svg
                >2023
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              Led the development of a comprehensive digital platform for child protection programs
              across Latin America. Managed cross-functional teams and stakeholder requirements.
            </p>
            <div class="flex items-center space-x-4 mb-4 text-sm text-gray-400">
              <div class="flex items-center">
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
                  class="lucide lucide-star w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                  ></path></svg
                >45
              </div>
              <div class="flex items-center">
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
                  class="lucide lucide-git-fork w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                  <path d="M12 12v3"></path></svg
                >12
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Project Management</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Scrum</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >WordPress</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Stakeholder Management</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/youruser/unicef-platform"
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
                  <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
                >Code</a
              ><a
                href="https://unicef-lacro-platform.org"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
                >Live Demo</a
              >
            </div>
          </div>
        </div>
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558092535-648ec3c50158?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8cHJvamVjdCUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3NDYyMDk3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Agile Project Dashboard"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://github.com/youruser/agile-dashboard"
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
                href="https://agile-dashboard-demo.vercel.app"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
              ></a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                Agile Project Dashboard
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
                  <path d="M3 10h18"></path></svg
                >2024
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              Built a real-time project management dashboard for tracking sprint progress, team
              velocity, and stakeholder communication. Used by multiple UNICEF offices.
            </p>
            <div class="flex items-center space-x-4 mb-4 text-sm text-gray-400">
              <div class="flex items-center">
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
                  class="lucide lucide-star w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                  ></path></svg
                >89
              </div>
              <div class="flex items-center">
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
                  class="lucide lucide-git-fork w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                  <path d="M12 12v3"></path></svg
                >23
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >JavaScript</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >HTML/CSS</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Agile</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Data Visualization</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/youruser/agile-dashboard"
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
                  <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
                >Code</a
              ><a
                href="https://agile-dashboard-demo.vercel.app"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
                >Live Demo</a
              >
            </div>
          </div>
        </div>
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1666148670142-2f01b117e6e0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3J1bSUyMGFnaWxlJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzU3NTI2MzczfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Scrum Workflow Automation"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://github.com/youruser/scrum-automation"
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
                href="https://scrum-automation-docs.com"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
              ></a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                Scrum Workflow Automation
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
                  <path d="M3 10h18"></path></svg
                >2023
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              Developed automation tools for Scrum ceremonies and backlog management. Integrated
              with Jira and Confluence for seamless workflow management.
            </p>
            <div class="flex items-center space-x-4 mb-4 text-sm text-gray-400">
              <div class="flex items-center">
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
                  class="lucide lucide-star w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                  ></path></svg
                >67
              </div>
              <div class="flex items-center">
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
                  class="lucide lucide-git-fork w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                  <path d="M12 12v3"></path></svg
                >18
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Python</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Jira API</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Automation</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Agile Tools</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/youruser/scrum-automation"
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
                  <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
                >Code</a
              ><a
                href="https://scrum-automation-docs.com"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
                >Live Demo</a
              >
            </div>
          </div>
        </div>
        <div
          class="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNtc3xlbnwxfHx8fDE3NTc1MjYzODF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="CMS Migration Tool"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href="https://github.com/youruser/cms-migration"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
              ></a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl text-white group-hover:text-orange-400 transition-colors">
                CMS Migration Tool
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
                  <path d="M3 10h18"></path></svg
                >2022
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">
              Created a comprehensive migration tool for moving content between WordPress and Drupal
              installations. Used in multiple UNICEF office migrations.
            </p>
            <div class="flex items-center space-x-4 mb-4 text-sm text-gray-400">
              <div class="flex items-center">
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
                  class="lucide lucide-star w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                  ></path></svg
                >124
              </div>
              <div class="flex items-center">
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
                  class="lucide lucide-git-fork w-4 h-4 mr-1"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                  <path d="M12 12v3"></path></svg
                >42
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >WordPress</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Drupal</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >PHP</span
              ><span
                class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-orange-400/20 hover:to-yellow-400/20 hover:text-orange-400 transition-all duration-300"
                >Database Migration</span
              >
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/youruser/cms-migration"
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
                  <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
                >Code</a
              ><a
                href="https://cms-migration-tool.herokuapp.com"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg
                >Live Demo</a
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
          href="https://github.com/yourusername"
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
