<script setup lang="ts">
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
</script>

<template>
  <input
    class="input"
    :value="modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :class="[props.group]"
    type="text"
    :placeholder="props.placeholder" />
</template>

<style lang="scss" scoped>
.input {
  flex: 1;
  border-radius: var(--radius-200);
  padding: 0 10px;
  height: 40px;
  font-size: var(--fz-300);
  border: 2px var(--clr-dark-300) solid;
  &::placeholder {
    color: var(--clr-dark-500);
  }
  &:focus {
    border: 2px var(--clr-main) solid;
  }
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
