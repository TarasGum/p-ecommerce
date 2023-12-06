<script setup lang="ts">
import { myContainer } from "@/shared/container";
import { ref } from "vue";
import { uiButton } from "@/shared/button";
import { uiLogo } from "@/shared/logo";
import { uiInput } from "@/shared/field";

const inputValue = ref();
</script>

<template>
  <header class="header">
    <myContainer class="header_container">
      <routerLink :to="{ name: 'home' }">
        <uiLogo variant="colored" />
      </routerLink>
      <uiButton content="text" group="left">
        <template #body> Button </template>
      </uiButton>
      <uiButton color="primary" content="text" group="middle">
        <template #body> Button </template>
      </uiButton>
      <uiInput
        v-model:modelValue="inputValue"
        placeholder="Type here"
        group="left"
        style="margin-right: 0" />
      <uiButton
        color="primary"
        content="text"
        style="margin-left: 0"
        group="right">
        <template #body> Button </template>
      </uiButton>
    </myContainer>
  </header>
</template>

<style scoped>
.header_container {
  width: 100%;
  min-width: 206px;
  display: flex;
  height: 86px;
  align-items: center;
}
</style>
