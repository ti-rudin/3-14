<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center py-20 lg:py-32 overflow-hidden w-full">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/foto/4.jpeg" 
          alt="Карьер" 
          class="w-full h-full object-cover"
        />
        <!-- Overlay для лучшей читаемости -->
        <div class="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            3-14
          </h1>
          <p class="text-2xl md:text-3xl text-white mb-4 drop-shadow-md">
            Разработка песчаных карьеров и продажа песка
          </p>
          <p class="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Качественные нерудные материалы для строительства и производства
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            О компании
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Компания "3-14" специализируется на разработке песчаных карьеров и поставке качественных нерудных материалов. 
            Мы работаем с несколькими месторождениями в Тверской области, обеспечивая стабильные поставки песка и гравия 
            для строительных и производственных нужд.
          </p>
        </div>
      </div>
    </section>

    <!-- Deposits Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши месторождения
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Три карьера в Тверской области с различным ассортиментом материалов
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Deposit 1: Большевишенское -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <svg class="w-24 h-24 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Большевишенское
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                Расположено в 20 км северо-западнее г. Торжок, в 1.1 км северо-восточнее д. Большое Вишенье 
                Торжокского района Тверской области.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Ассортимент и цены:</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Песок сеянный</span>
                    <span class="font-bold text-amber-600 dark:text-amber-400">400 ₽/м³</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Гравий 5/20</span>
                    <span class="font-bold text-amber-600 dark:text-amber-400">1550 ₽/м³</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Гравий 20/40</span>
                    <span class="font-bold text-amber-600 dark:text-amber-400">1850 ₽/м³</span>
                  </li>
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Гравий 40/70</span>
                    <span class="font-bold text-amber-600 dark:text-amber-400">1850 ₽/м³</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Deposit 2: Эммаус -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <svg class="w-24 h-24 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Эммаус
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                Расположено в 19 км юго-восточнее г. Твери, 2 км западнее д. Нов. Семеновское, 
                Калининского района Тверской области.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Ассортимент и цены:</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Песок</span>
                    <span class="font-bold text-amber-600 dark:text-amber-400">450 ₽/м³</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Deposit 3: Красногорское-2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <svg class="w-24 h-24 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Красногорское-2
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                Расположено в 5 км юго-восточнее г. Тверь, в 3 км западнее д. Савватьево 
                Калининского муниципального района Тверской области.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Ассортимент и цены:</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between items-center">
                    <span class="text-gray-700 dark:text-gray-300">Песок</span>
                    <span class="font-bold text-amber-600 dark:text-amber-400">440 ₽/м³</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Галерея
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Наши карьеры и производство
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="i in 8" 
            :key="i"
            class="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
            @click="openLightbox(i)"
          >
            <img 
              :src="`/foto/${i}.jpeg`" 
              :alt="`Фото ${i}`"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Готовы ответить на ваши вопросы и обсудить условия поставки
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="tel:+79040170207" 
              class="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-amber-700 dark:hover:bg-amber-600 text-white font-medium rounded-lg transition-colors shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +7(904)017-02-07
            </a>
            <a 
              href="mailto:ax.rudin@gmail.com" 
              class="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 border-2 border-amber-600 dark:border-amber-700 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxImage"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <button 
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img 
        :src="`/foto/${lightboxImage}.jpeg`" 
        :alt="`Фото ${lightboxImage}`"
        class="max-w-full max-h-full object-contain"
        @click.stop
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const lightboxImage = ref(null)

    const openLightbox = (imageNumber) => {
      lightboxImage.value = imageNumber
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      lightboxImage.value = null
      document.body.style.overflow = ''
    }

    return {
      lightboxImage,
      openLightbox,
      closeLightbox
    }
  }
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>