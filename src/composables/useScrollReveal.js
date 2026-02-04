import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal(threshold = 0.2) {
  const elRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold },
    )
    if (elRef.value) observer.observe(elRef.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { elRef, isVisible }
}
