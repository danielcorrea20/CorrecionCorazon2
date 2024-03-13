<script setup>
defineProps(["id", "title", "body"]);
</script>
<template>
    <v-col lg="12" md="6" sm="3">
        <v-card class="mx-auto my-8" elevation="16">
            <v-card-item>
                <v-card-title>
                    {{ id }}
                </v-card-title>
                <v-card-subtitle>
                    {{ title }}
                </v-card-subtitle>
            </v-card-item>

            <v-card-text>
                {{ body }}
            </v-card-text>
        </v-card>
    </v-col>


    <!--
    <div>

        <div class="card-body">
            <h5 class="card-title">{{ id }}</h5>
            <h1 class="card-text">{{ title }}</h1>
            <p class="card-text">{{ body }}</p>

        </div>
    </div>-->
</template>