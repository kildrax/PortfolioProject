<script setup>
import Header from './components/Header.vue'
import BannerSection from './components/BannerSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CollaborationSection from './components/CollaborationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Header></Header>
    <BannerSection></BannerSection>
    <AboutSection></AboutSection>
    <ExperienceSection></ExperienceSection>
    <CollaborationSection></CollaborationSection>
    <ProjectsSection></ProjectsSection>
    <ContactSection></ContactSection>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
