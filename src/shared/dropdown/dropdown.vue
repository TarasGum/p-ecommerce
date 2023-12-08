<script setup lang="ts">
import { UiIcon } from "@/shared/icon";
import { ref, onMounted, onBeforeUnmount } from "vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
const isShow = ref(false);

onMounted(() => {
  window.addEventListener("click", (e) => {
    isShow.value = false;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("click", () => {
    isShow.value = false;
  });
});
</script>

<template>
  <div class="dropdown" @click.stop="isShow = !isShow">
    {{ props.title }}
    <div class="dropdown_icon">
      <div
        class="icon-wrapper"
        :class="{
          rotated: !isShow,
        }">
        <UiIcon type="dropdown" />
      </div>
    </div>
    <Transition>
      <div v-if="isShow" class="dropdown-items_place">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  font-weight: 500;
  position: relative;
  cursor: pointer;
  padding: 0 7px 0 10px;
  @include flex-all-sb;
  width: auto;
  height: 40px;
  &_icon {
    margin-left: 5px;
  }
}
.dropdown-items_place {
  overflow: hidden;
  font-weight: 400;
  row-gap: 8px;
  @include flex-column;

  border-radius: var(--radius-200);
  cursor: auto;
  top: 48px;

  position: absolute;
  padding: 16px;
  outline: 2px var(--clr-dark-300) solid;
}
.icon-wrapper {
  transition: transform var(--transition);
}
.rotated {
  transition: transform var(--transition);
  transform: rotate(-90deg);
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from {
  transform: scale(0);
  transform-origin: top;
}
.v-enter-to {
  transform: scale(1);
  transform-origin: top;
}
.v-leave-to {
  transform: scale(0);
  transform-origin: top;
}
</style>
