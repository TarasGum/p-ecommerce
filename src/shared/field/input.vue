<script setup lang="ts">
import { ref } from "vue";
interface Props {
  variant?: "email";
  placeholder: string | undefined;
  group?: "left" | "right" | "middle";
  modelValue: string | number;
}
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();
const props = defineProps<Props>();

let isFocused = ref(false);
</script>

<template>
  <div
    @focus="isFocused = true"
    @blur="isFocused = false"
    class="input_wrapper"
    tabindex="1"
    :class="[
      props.group,
      props.variant,
      {
        focused: isFocused,
      },
    ]">
    <input
      class="input"
      :value="modelValue"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="text"
      :placeholder="props.placeholder" />
    <div class="slot_wrapper"><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
.input_wrapper {
  @include flex-v-center;
  flex: 1;
  border-radius: var(--radius-100);
  padding: 0 0 0 10px;
  font-size: var(--fz-300);
  outline: 2px var(--clr-dark-300) solid;
}

.focused {
  outline: 2px var(--clr-main) solid;
}
.input {
  height: 40px;
  flex: 1;
  &::placeholder {
    color: var(--clr-dark-500);
  }
}

.slot_wrapper {
  @include flex-v-center;
  margin-left: auto;
  margin-right: -0.5px;
}
.email {
  position: relative;
  padding-left: 36px;
  background: url(./assets/email.svg) no-repeat 8px 50%;
}
.left {
  margin-right: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0px;
  &:focus {
    border-right: 0px;
  }
}

.middle {
  margin: 0 5px;
  border-right: 0px;
  border-left: 0px;
  border-radius: 0px;
  &:focus {
    border-right: 0px;
    border-left: 0px;
  }
}
.right {
  border-left: 0px;
  margin-left: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  &:focus {
    border-left: 0px;
  }
}
</style>
