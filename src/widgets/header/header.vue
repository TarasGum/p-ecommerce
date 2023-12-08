<script setup lang="ts">
import { MyContainer } from "@/shared/container";
import { ref } from "vue";
import { UiButton } from "@/shared/button";
import { UiDropdown } from "@/shared/dropdown";
import { UiLogo } from "@/shared/logo";
import { UiInput } from "@/shared/field";
import { MyNavItem } from "@/entities/nav-item";
import type { NavItemTypes } from "@/app/types/types";
import { UiText } from "@/shared/typography";

const navItems = [
  {
    title: "Profile",
    icon: "person",
    path: "profile",
  },
  {
    title: "Message",
    icon: "message",
    path: "message",
  },
  {
    title: "Orders",
    icon: "like",
    path: "orders",
  },
  {
    title: "My Cart",
    icon: "cart",
    path: "cart",
  },
];

const dropdownContent = [
  { title: "Electronics" },
  { title: "Furniture" },
  { title: "Clothes" },
  { title: "Electronics" },
];

const dropdownTitle = ref("All category");
const inputValue = ref();
</script>

<template>
  <header class="header">
    <MyContainer class="header_container">
      <routerLink :to="{ name: 'home' }">
        <UiLogo variant="colored" />
      </routerLink>

      <UiInput v-model:modelValue="inputValue" placeholder="Type here">
        <UiDropdown :title="dropdownTitle">
          <UiText
            class="dropdown-text"
            style="cursor: pointer"
            @click="dropdownTitle = i.title"
            v-for="i in dropdownContent"
            :key="i.title"
            tagName="p-md"
            >{{ i.title }}</UiText
          ></UiDropdown
        >
        <UiButton
          color="primary"
          content="text"
          style="margin-left: 0"
          group="right">
          <template #body> Button </template>
        </UiButton></UiInput
      >

      <nav class="nav">
        <routerLink
          v-for="item in navItems"
          :to="{ name: item.path }"
          :key="item.title">
          <myNavItem :type="(item.icon as NavItemTypes)" :title="item.title" />
        </routerLink>
      </nav>
    </MyContainer>
  </header>
</template>

<style lang="scss" scoped>
.dropdown-text {
  transition: var(--transition);
  &:hover {
    transition: var(--transition);
    transform: scale(1.1);
  }
}
.header_container {
  width: 100%;
  min-width: 206px;
  display: flex;
  height: 86px;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 228px;
}
</style>
