<script setup>
import categories from '~/utils/categories';


</script>
<template>
    <v-main>
        <v-container>
            <h1 class="font-weight-regular mb-4">
                Elige una palabra que te guste
            </h1>

            <v-row class="grid grid-cols-2 flex-wrap">
                <v-col cols="6" v-for="category of categories" :key="category" >
                    <v-card @click="() => { }" class="text-capitalize"
                        size="large" color="green">
                        <v-card-text class="text-center d-flex justify-center flex-col">
                            {{ category.icon }} {{ category.title }}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-main>
</template>
