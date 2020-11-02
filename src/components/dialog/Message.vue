<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
            <v-card>
                <v-card-title class="headline">
                {{title}}
                </v-card-title>
                <v-card-text>{{ message }}</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="$emit('close-dialog')"
                >
                    OKAY
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
  props: ["title", "message"],
  data() {
    return {
      dialog: true
    };
  }
};
</script>
    
<style>
</style>
