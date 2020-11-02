<template>
  <v-row>
    <v-col></v-col>
    <v-col sm12 md8 lg6>
      <h1>{{title}}</h1>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
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
        <v-btn
          :disabled="!valid"
          color="primary"
          type="submit"
        >
          Submit
        </v-btn>
      </v-form>
    </v-col>
    <v-col></v-col>
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
