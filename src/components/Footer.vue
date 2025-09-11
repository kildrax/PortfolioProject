<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
const { elRef: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.2)
</script>
<template>
  <div class="container mx-auto px-6 pb-20">
    <div
      ref="sectionRef"
      class="text-center mt-20 pt-8 border-t border-gray-700"
      :style="
        sectionVisible
          ? 'opacity: 1; transform: none; transition: opacity 0.8s, transform 0.8s;'
          : 'opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s;'
      "
    >
      <p class="text-gray-400">© 2024 Your Name. Built with React and Tailwind CSS.</p>
      <p class="text-gray-500 text-sm mt-2">
        Available for project management consulting and technical leadership opportunities.
      </p>
    </div>
  </div>
</template>
