<script setup lang="ts">
interface Props {
  size: "small" | "normal" | "large";
  content: "text" | "icon" | "icon+text" | "text+icon";
  color: "primary" | "light";
  group?: "left" | "right" | "middle";
}

const props = withDefaults(defineProps<Props>(), {
  size: "normal",
  color: "primary",
  content: "text",
});
</script>

<template>
  <button class="button" :class="[props.size, props.color, props.group]">
    <slot name="icon" v-if="props.content === 'icon+text'"></slot>

    <slot name="body"></slot>
    <slot name="icon" v-if="props.content === 'text+icon'"></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @include flex-all-center;
  transition: var(--transition);
}

.button:hover {
  filter: brightness(1.2);
  transition: var(--transition);
}

.small {
  height: 30px;
  padding: 0px 10px;
  border-radius: 6px;
  font-size: var(--fz-200);
}

.normal {
  height: 40px;
  padding: 0px 16px;
  border-radius: 6px;
  font-size: var(--fz-300);
}

.large {
  height: 54px;
  padding: 0px 20px;
  border-radius: 8px;
  font-size: var(--fz-400);
}

.primary {
  background: var(--clr-main-gradient);
  color: var(--clr-light);
}

.light {
  background-color: var(--clr-light);
  border: 1px solid var(--gray-300, #dee2e7);
  color: var(--clr-main);
}

.left {
  margin-right: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.middle {
  margin: 0 5px;
  border-radius: 0px;
}
.right {
  margin-left: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
