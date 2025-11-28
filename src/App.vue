<template>
  <div class="flex flex-col min-h-screen">
    <nav class="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow" role="navigation" aria-label="Основная навигация">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-4">
            <router-link to="/" class="flex items-center" aria-label="На главную страницу">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 196 196" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-900 dark:text-white transition-colors duration-200"
                aria-hidden="true"
              >
                <rect x="99" y="7.07617" width="130" height="130" rx="7" transform="rotate(45 99 7.07617)" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
                <circle cx="98.293" cy="99.0003" r="21.5" transform="rotate(45 98.293 99.0003)" fill="currentColor"/>
                <circle cx="61.5234" cy="135.769" r="5.5" transform="rotate(45 61.5234 135.769)" fill="currentColor"/>
                <circle cx="135.062" cy="62.2303" r="5.5" transform="rotate(45 135.062 62.2303)" fill="currentColor"/>
                <circle cx="135.062" cy="135.769" r="5.5" transform="rotate(45 135.062 135.769)" fill="currentColor"/>
                <circle cx="62.2305" cy="62.9374" r="5.5" transform="rotate(45 62.2305 62.9374)" fill="currentColor"/>
              </svg>
            </router-link>
          </div>

          <!-- Центрированное меню -->
          <div class="hidden md:flex flex-1 justify-center">
            <div class="flex space-x-2">
       

            </div>
          </div>

          <div class="flex items-center space-x-4">
            <!-- Theme toggle -->
            <button 
              @click="toggleTheme" 
              :aria-label="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
              :aria-pressed="isDark"
              class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Mobile menu button 
            <button @click="toggleMobileMenu" aria-label="Toggle Menu"
              class="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            -->
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-3 space-y-1" role="menu" aria-label="Мобильное меню">
        <router-link @click="closeMobileMenu" to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          role="menuitem">
          Главная
        </router-link>
      </div>
    </nav>

    <main class="flex-grow bg-gray-50 dark:bg-gray-900" role="main">
      <router-view></router-view>
    </main>

    <footer class="bg-white dark:bg-gray-800 shadow" role="contentinfo">
      <div class="w-full mx-auto max-w-screen-xl p-4">
        <div class="text-center">
          <span class="text-sm text-gray-500 dark:text-gray-400">
            АО "Полезные ископаемые" © {{ new Date().getFullYear() }} 
          </span>
        </div>

      </div>
    </footer>


  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
  },
  setup() {
    const isDark = ref(false);
    const mobileMenuOpen = ref(false);

    // Load theme from localStorage or system preference
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      updateTheme();
    });

    // Watch and update theme class on html element
    watch(isDark, (newVal) => {
      updateTheme();
      localStorage.setItem('theme', newVal ? 'dark' : 'light');
    });

    function updateTheme() {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    function toggleTheme() {
      isDark.value = !isDark.value;
    }

    function toggleMobileMenu() {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    }

    function closeMobileMenu() {
      mobileMenuOpen.value = false;
    }

    return {
      isDark,
      mobileMenuOpen,
      toggleTheme,
      toggleMobileMenu,
      closeMobileMenu
    };
  },
};
</script>

<style>
/* Dark mode styles */
:root {
  --primary-color: #f0b90b;
  --text-color: rgba(0, 0, 0, 0.85);
  --bg-color: #fff;
}

:root.dark {
  --primary-color: #f0b90b;
  --text-color: rgba(255, 255, 255, 0.85);
  --bg-color: #141414;
}

body {
  color: var(--text-color);
  background-color: var(--bg-color);
}

/* Ensure mobile menu stays above overlay */
#mobile-menu {
  position: relative;
  z-index: 20;
}
</style>
