<template>
    <div class="header">
        <div class="header__logo-container">
            <img :src="item.personalLogo" class="header__logo-frame-image" />
        </div>
        <div class="header__list-container">
            <div class="header__list-container__home">
                <img :src="item.homeIcon" class="header__list-container__home-icon" />
                <p class="header__list-container__home-title">{{ item.homeTitle }}</p>
            </div>
            <div class="header__list-container__person">
                <img :src="item.personIcon" class="header__list-container__person-icon" />
                <!-- <p class="header__list-container__group-title">{{ item.groupName }}</p> -->
            </div>
            <div class="header__list-container__project">
                <img :src="item.projectIcon" class="header__list-container__project-icon" />
                <!-- <p class="header__list-container__store-title">{{ item.storeName }}</p> -->
            </div>
            <div class="header__list-container__recommend">
                <img :src="item.recommendIcon" class="header__list-container__recommend-icon" />
                <!-- <p class="header__list-container__recommend-title">{{ item.recommendName }}</p> -->
            </div>
        </div>
        <div class="header__notification">
            <img :src="item.notificationIcon" class="header__notification__icon" />
        </div>
        <div class="header__contact">
            <div class="header__contact__textIcon">
                <img :src="item.contactIcon" class="header__contact__textIcon__icon" />
                <div class="header__contact__textIcon__text">
                    <p class="header__contact__textIcon__text-title">Contact</p>
                    <p class="header__contact__textIcon__text-content">Get in touch</p>
                </div>
            </div>
            <img :src="item.expandIcon" class="header__contact__expandIcon" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { HeaderProps } from "./types/Header";
import { ref } from "vue";

const props = defineProps<{
    item: HeaderProps;
}>();

const item = ref(props.item);
</script>

<style scoped lang="scss">
@use "./style/_header.scss";
</style>