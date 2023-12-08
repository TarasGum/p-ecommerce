<script setup lang="ts">
import { UiIcon } from "@/shared/icon";
import type { NavItemTypes } from "@/app/types/types";
interface Props {
  type: NavItemTypes;
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="nav-item">
    <uiIcon :type="props.type" />
    {{ props.title }}
  </div>
</template>

<style lang="scss" scoped>
.nav-item {
  color: var(--clr-dark-500);
  font-size: var(--fz-100);
  row-gap: 5px;
  width: 50px;
  height: 41px;
  display: grid;
  transition: filter var(--transition);

  place-items: center;
  &:hover {
    filter: brightness(0.6);
    transition: filter var(--transition);
  }
}
</style>
