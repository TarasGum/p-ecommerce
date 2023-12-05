<script setup lang="ts">
import { myContainer } from "@/shared/container";
import { uiLogo } from "@/shared/logo";
import { uiButton } from "@/shared/button";
</script>

<template>
  <header class="header">
    <myContainer class="header_container">
      <routerLink :to="{ name: 'home' }">
        <uiLogo variant="colored"
      /></routerLink>
      <uiButton color="primary" content="text" group="left">
        <template #body> Button </template>
      </uiButton>
      <uiButton color="primary" content="text" group="middle">
        <template #body> Button </template>
      </uiButton>
      <uiButton color="primary" content="text" group="right">
        <template #body> Button </template>
      </uiButton>
    </myContainer>
  </header>
</template>

<style scoped>
.header_container {
  display: flex;
  height: 86px;
  align-items: center;
}
</style>
