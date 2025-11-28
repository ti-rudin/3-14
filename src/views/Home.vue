<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-20 lg:py-32 overflow-hidden w-full" aria-labelledby="hero-title">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source 
            srcset="/foto/4.jpeg?w=1920&format=webp" 
            type="image/webp"
            media="(min-width: 1024px)"
          />
          <source 
            srcset="/foto/4.jpeg?w=1024&format=webp" 
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source 
            srcset="/foto/4.jpeg?w=768&format=webp" 
            type="image/webp"
          />
          <img 
            src="/foto/4.jpeg" 
            srcset="/foto/4.jpeg?w=1920 1920w, /foto/4.jpeg?w=1024 1024w, /foto/4.jpeg?w=768 768w"
            sizes="100vw"
            alt="" 
            class="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        <!-- Overlay для лучшей читаемости -->
        <div class="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center">
          <h1 id="hero-title" class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            АО "Полезные ископаемые"
          </h1>
          <p class="text-2xl md:text-3xl text-white mb-4 drop-shadow-md">
            Разработка песчаных и каменных карьеров, продажа песка, щебня и гравия
          </p>
          <p class="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Качественные нерудные материалы для строительства и производства
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-white dark:bg-gray-800 scroll-animate" aria-labelledby="about-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 id="about-title" class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            О компании
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            АО "Полезные ископаемые" специализируется на разработке песчаных и каменных карьеров и поставке качественных нерудных материалов. 
            Мы работаем с несколькими месторождениями в Тверской области, обеспечивая стабильные поставки песка и гравия 
            для строительных и производственных нужд.
          </p>
        </div>
      </div>
    </section>

    <!-- Deposits Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 scroll-animate" aria-labelledby="deposits-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 id="deposits-title" class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши месторождения
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Три карьера в Тверской области с различным ассортиментом материалов
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8" role="list">
          <!-- Deposit 1: Большевишенское -->
          <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" role="listitem">
            <div class="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <picture>
                <source 
                  srcset="/foto/5.jpeg?w=600&format=webp" 
                  type="image/webp"
                />
                <img 
                  src="/foto/5.jpeg" 
                  srcset="/foto/5.jpeg?w=600 600w, /foto/5.jpeg?w=400 400w"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt="Песчаный карьер месторождения Большевишенское в Тверской области. Вид на разработку песчаного карьера с техникой и складом песка" 
                  class="w-full h-full object-cover transition-opacity duration-300"
                  loading="lazy"
                />
              </picture>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Большевишенское
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Расположено в 20 км северо-западнее г. Торжок, в 1.1 км северо-восточнее д. Большое Вишенье 
                Торжокского района Тверской области.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Ассортимент и цены:</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Песок сеянный</span>
                    <span class="font-bold text-amber-600 dark:text-amber-500" data-price="400">400 ₽/м³</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-200">Гравий 5/20</span>
                    <span class="font-bold text-amber-600 dark:text-amber-500" data-price="1550">1550 ₽/м³</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-200">Гравий 20/40</span>
                    <span class="font-bold text-amber-600 dark:text-amber-500" data-price="1850">1850 ₽/м³</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-200">Гравий 40/70</span>
                    <span class="font-bold text-amber-600 dark:text-amber-500" data-price="1850">1850 ₽/м³</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <!-- Deposit 2: Эммаус -->
          <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" role="listitem">
            <div class="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <picture>
                <source 
                  srcset="/foto/7.jpeg?w=600&format=webp" 
                  type="image/webp"
                />
                <img 
                  src="/foto/7.jpeg" 
                  srcset="/foto/7.jpeg?w=600 600w, /foto/7.jpeg?w=400 400w"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt="Карьер месторождения Эммаус в Калининском районе Тверской области. Добыча песка и нерудных материалов" 
                  class="w-full h-full object-cover transition-opacity duration-300"
                  loading="lazy"
                />
              </picture>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Эммаус
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Расположено в 19 км юго-восточнее г. Твери, 2 км западнее д. Нов. Семеновское, 
                Калининского района Тверской области.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Ассортимент и цены:</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-200">Песок</span>
                    <span class="font-bold text-amber-600 dark:text-amber-500" data-price="450">450 ₽/м³</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <!-- Deposit 3: Красногорское-2 -->
          <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" role="listitem">
            <div class="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <picture>
                <source 
                  srcset="/foto/6.jpeg?w=600&format=webp" 
                  type="image/webp"
                />
                <img 
                  src="/foto/6.jpeg" 
                  srcset="/foto/6.jpeg?w=600 600w, /foto/6.jpeg?w=400 400w"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt="Песчаный карьер месторождения Красногорское-2 в Тверской области. Производство и добыча песка для строительства" 
                  class="w-full h-full object-cover transition-opacity duration-300"
                  loading="lazy"
                />
              </picture>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Красногорское-2
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Расположено в 5 км юго-восточнее г. Тверь, в 3 км западнее д. Савватьево 
                Калининского муниципального района Тверской области.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Ассортимент и цены:</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-200">Песок</span>
                    <span class="font-bold text-amber-600 dark:text-amber-500" data-price="440">440 ₽/м³</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 bg-white dark:bg-gray-800 scroll-animate" aria-labelledby="gallery-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 id="gallery-title" class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Галерея
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Наши карьеры и производство
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
          <div 
            v-for="i in 8" 
            :key="i"
            class="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-200 dark:bg-gray-700"
            @click="openLightbox(i)"
            @keydown.enter="openLightbox(i)"
            @keydown.space.prevent="openLightbox(i)"
            role="button"
            :aria-label="`Открыть фото ${i} в полном размере`"
            tabindex="0"
          >
            <picture>
              <source 
                :srcset="`/foto/${i}.jpeg?w=400&format=webp`" 
                type="image/webp"
              />
              <img 
                :src="`/foto/${i}.jpeg`" 
                :srcset="`/foto/${i}.jpeg?w=400 400w, /foto/${i}.jpeg?w=800 800w`"
                sizes="(min-width: 768px) 25vw, 50vw"
                :alt="`Фотография ${i} из галереи: разработка песчаных и каменных карьеров АО Полезные ископаемые в Тверской области, добыча песка, щебня и гравия`"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </picture>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 scroll-animate" aria-labelledby="contact-title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 id="contact-title" class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Готовы ответить на ваши вопросы и обсудить условия поставки
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a 
              href="tel:+79040170207" 
              aria-label="Позвонить по телефону +7(904)017-02-07"
              class="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-amber-700 dark:hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg"
              @click="trackPhoneClick"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +7 (904) 017-02-07
            </a>
          </div>
          <div class="text-center text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <div>170001, Тверская область, г.&nbsp;Тверь, тер.&nbsp;Двор&nbsp;Пролетарки, д.&nbsp;7, помещ.&nbsp;№&nbsp;113-114</div>
            <div>ИНН: 9721254752 | ОГРН: 1257700336926</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Кнопка "Наверх" -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 p-3 bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      aria-label="Прокрутить наверх"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxImage"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      @click="closeLightbox"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="`lightbox-image-${lightboxImage}`"
    >
      <!-- Close button -->
      <button 
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full hover:bg-white hover:bg-opacity-10"
        aria-label="Закрыть изображение"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Previous button -->
      <button 
        @click.stop="navigateImage('prev')"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 rounded-full hover:bg-white hover:bg-opacity-10"
        aria-label="Предыдущее изображение"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Next button -->
      <button 
        @click.stop="navigateImage('next')"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 rounded-full hover:bg-white hover:bg-opacity-10"
        aria-label="Следующее изображение"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Image counter -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full z-10">
        {{ lightboxImage }} / {{ totalImages }}
      </div>

      <!-- Image -->
      <img 
        :id="`lightbox-image-${lightboxImage}`"
        :src="`/foto/${lightboxImage}.jpeg`" 
        :alt="`Фотография ${lightboxImage} из галереи АО Полезные ископаемые: разработка карьеров, добыча песка, щебня и гравия в Тверской области`"
        class="max-w-full max-h-full object-contain"
        @click.stop
      />
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted, watch, onMounted, nextTick } from 'vue'

export default {
  name: 'Home',
  setup() {
    const lightboxImage = ref(null)
    const totalImages = 8
    const showScrollTop = ref(false)

    const openLightbox = (imageNumber) => {
      lightboxImage.value = imageNumber
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      lightboxImage.value = null
      document.body.style.overflow = ''
    }

    const navigateImage = (direction) => {
      if (!lightboxImage.value) return
      
      if (direction === 'next') {
        lightboxImage.value = lightboxImage.value >= totalImages ? 1 : lightboxImage.value + 1
      } else {
        lightboxImage.value = lightboxImage.value <= 1 ? totalImages : lightboxImage.value - 1
      }
    }

    const handleKeydown = (event) => {
      if (!lightboxImage.value) return

      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          navigateImage('prev')
          break
        case 'ArrowRight':
          navigateImage('next')
          break
      }
    }

    const handleScroll = () => {
      showScrollTop.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const trackPhoneClick = () => {
      // Здесь можно добавить аналитику
      if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_click', {
          event_category: 'engagement',
          event_label: 'phone_number'
        })
      }
    }

    // Анимации при скролле
    const setupScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Наблюдаем за секциями с классом scroll-animate
      const sections = document.querySelectorAll('.scroll-animate')
      sections.forEach(section => {
        section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')
        observer.observe(section)
      })
    }

    // Анимация чисел в ценах
    const animateNumbers = async () => {
      await nextTick()
      const priceElements = document.querySelectorAll('[data-price]')
      priceElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-price'))
        if (isNaN(target)) return
        
        const originalText = el.textContent
        const duration = 2000
        let startTime = null

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const current = Math.floor(target * progress)
          el.textContent = `${current} ₽/м³`
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            el.textContent = originalText
          }
        }
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              requestAnimationFrame(animate)
              observer.unobserve(el)
            }
          })
        }, { threshold: 0.5 })
        observer.observe(el)
      })
    }

    watch(lightboxImage, (newVal) => {
      if (newVal) {
        document.addEventListener('keydown', handleKeydown)
      } else {
        document.removeEventListener('keydown', handleKeydown)
      }
    })

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      setupScrollAnimations()
      animateNumbers()
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = ''
    })

    return {
      lightboxImage,
      totalImages,
      showScrollTop,
      openLightbox,
      closeLightbox,
      navigateImage,
      scrollToTop,
      trackPhoneClick
    }
  }
}
</script>

<style scoped>
/* Анимации при скролле */
.scroll-animate.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Плавные переходы для карточек */
article {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

article:hover {
  transform: translateY(-4px);
}
</style>