export const mediaFlag = ref(window.innerWidth);
export const isMenuVisible = computed(() => mediaFlag.value >= 768);

export const updateMediaFlag = () => {
    mediaFlag.value = window.innerWidth;
  };