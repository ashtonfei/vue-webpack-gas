<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="10" lg="8">
      <v-card>
        <v-card-title>
          <h2 class="mb-4 primary--text">{{title}}</h2>
        </v-card-title>
        <v-card-text>
          <v-form ref="form"
            v-model="valid"
            lazy-validation>
            <div v-for="item in items" :key="item.label">
              <v-text-field
                v-if=" item.type === 'input' "
                v-model="item.value"
                :rules="item.rules"
                :label="item.label"
                :required="item.required"
                outlined
              ></v-text-field>
              <v-textarea
                v-else-if=" item.type === 'textarea' "
                v-model="item.value"
                :rules="item.rules"
                :label="item.label"
                :required="item.required"
                outlined
              ></v-textarea>
              <v-select
                v-else-if=" item.type === 'select' "
                v-model="item.value"
                :items="item.options"
                :rules="item.rules"
                :label="item.label"
                :required="item.required"
                :multiple="item.multiple"
                outlined
              ></v-select>
            </div>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="primary"
            :disabled="!valid"
            text
            @click.prevent="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    title: "Vue - Webpack - Google Apps Script",
    items: [
      {
        type: "input",
        label: "Name",
        value: "",
        rules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        required: true
      },
      {
        type: "input",
        label: "Email",
        value: "",
        rules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        required: true
      },
      {
        type: "select",
        label: "Webdev Tools (Single)",
        value: null,
        rules: [v => !!v || "Item is required"],
        required: true,
        options: [
          "Vue JS",
          "Webpack",
          "Google Apps Script",
          "Javascript",
          "HTML",
          "CSS"
        ],
        multiple: false
      },
      {
        type: "select",
        label: "Webdev Tools (Multiple)",
        value: [],
        rules: [v => !!v.length || "Item is required"],
        required: true,
        options: [
          "Vue JS",
          "Webpack",
          "Google Apps Script",
          "Javascript",
          "HTML",
          "CSS"
        ],
        multiple: true
      },
      {
        type: "textarea",
        label: "Comments",
        value: "",
        rules: [v => !!v || "Item is required"],
        required: true
      }
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      const values = [];
      const headers = [];
      this.items.forEach(item => {
        if (Array.isArray(item.value)) {
          values.push(JSON.stringify(item.value));
        } else {
          values.push(item.value);
        }
        headers.push(item.label);
      });
      console.log({ values, headers });
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>
