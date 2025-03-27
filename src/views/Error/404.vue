<template>
  <n-empty :description="t('common.404description')" style="margin-top: 200px;">
    <template #extra>
      <router-link to="/">
        <n-button size="small">
          {{ t('common.404homeButton') }}
        </n-button>
      </router-link>
    </template>
  </n-empty>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style>

</style>