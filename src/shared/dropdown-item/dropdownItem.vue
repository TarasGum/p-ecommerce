<script setup lang="ts">
interface Props {
  content: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "click"): void;
}>();

const click = () => {
  emit("click");
};
</script>

<template>
  <div @click="click" class="dropdown-item">{{ props.content }}</div>
</template>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>
