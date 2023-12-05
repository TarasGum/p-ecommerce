<script setup lang="ts">
import { computed } from "vue";

interface Props {
  tagName: "p-md" | "p-sm" | "p-xs" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const props = defineProps<Props>();

const tagName = computed(() => {
  return props.tagName === "p-md" ||
    props.tagName === "p-sm" ||
    props.tagName === "p-xs"
    ? "p"
    : props.tagName;
});
</script>

<template>
  <component :is="tagName" :class="[props.tagName]"><slot></slot></component>
</template>

<style scoped>
.p-md {
  font-size: var(--fz-300);
}

.p-sm {
  font-size: var(--fz-200);
}

.p-xs {
  font-size: var(--fz-100);
}
.h1 {
  font-size: var(--fz-800);
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.h2 {
  font-size: var(--fz-700);
  font-weight: 600;
}

.h3 {
  font-size: var(--fz-600);
  font-weight: 600;
}
.h4 {
  font-size: var(--fz-500);
  font-weight: 600;
}
.h5 {
  font-size: var(--fz-400);
  font-weight: 600;
}

.h6 {
  font-size: var(--fz-300);
  font-weight: 600;
}
</style>
