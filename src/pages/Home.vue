<template>
    <div>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="8" lg="6">
            <v-card class="mb-4">
                <v-card-text>
                    <h1 class="text-center primary--text">Google Apps Script APIs Demo</h1> 
                </v-card-text>
            </v-card>
            
            <v-card v-for="(api, index) in apis" :key="api.name" class="mb-4">
                <v-card-title primary-title>
                    <v-icon left>code</v-icon>
                    {{api.name}}
                </v-card-title>
                <v-card-text>
                    {{api.description}}
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" text @click="api.callback(index)" :disabled="submitting">Try API</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="secondary" text :href="api.url" target="_blank">Help Doc</v-btn>
                </v-card-actions>
                <v-progress-linear
                    v-if="submitting && apiIndex === index"
                    color="primary"
                    indeterminate
                    rounded
                ></v-progress-linear>
            </v-card>
        </v-col>
    </v-row>
    <Message 
        :title="dialog.title" 
        :message="dialog.message" 
        v-if="dialog.open" 
        @close-dialog="dialog.open = false"/>
    </div>
</template>

<script>
import Message from "../components/dialog/Message";
export default {
  components: { Message },
  methods: {
    sendEmail(index) {
      // TODO: use google.script.run api here
      this.apiIndex = index
      this.submitting = true
      google.script.run
        .withSuccessHandler((email) => {
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "GmailApp";
            this.dialog.message = `An email has been sent successfully to email address: ${email}`;
        })
        .withFailureHandler((error)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "Error";
            this.dialog.message = error.message
        })
        .sendEmail()
      
    },
    createEvent(index) {
      // TODO: use google.script.run api here
      this.apiIndex = index
      this.submitting = true
      google.script.run
        .withSuccessHandler((email)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "CalendarApp";
            this.dialog.message = `An all day event has been created in caleander account: ${email}.`;
        })
        .withFailureHandler((error)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "Error";
            this.dialog.message = error.message
        })
        .createEvent()
    },
    createSheet(index) {
      // TODO: use google.script.run api here
      this.apiIndex = index
      this.submitting = true
      google.script.run
        .withSuccessHandler((url)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "CalendarApp";
            this.dialog.message = `<p>A new spreadsheet has been created on your Google Drive.<br><a href="${url}" target="_blank">Spreadsheet</a></p>.`;
        })
        .withFailureHandler((error)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "Error";
            this.dialog.message = error.message
        })
        .createSheet()
    },
    createFile(index) {
      // TODO: use google.script.run api here
      this.apiIndex = index
      this.submitting = true
      google.script.run
        .withSuccessHandler((url)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "CalendarApp";
            this.dialog.message = `<p>A new file has been created on your Google Drive.<br><a href="${url}" target="_blank">File</a></p>.`;
        })
        .withFailureHandler((error)=>{
            this.apiIndex = null
            this.submitting = false
            this.dialog.open = true;
            this.dialog.title = "Error";
            this.dialog.message = error.message
        })
        .createFile()
    }
  },
  data() {
    return {
        submitting: false,
        apiIndex: null,
      dialog: {
        open: false,
        title: "Message",
        message: null
      },
      apis: [
        {
          name: "GmailApp",
          description: "Send an email with GmailApp API.",
          url:
            "https://developers.google.com/apps-script/reference/gmail/gmail-app",
          callback: (index) => {
            this.sendEmail(index);
          }
        },
        {
          name: "CalendarApp",
          description: "Create a all day event with Calendar API.",
          url:
            "https://developers.google.com/apps-script/reference/calendar/calendar-app",
          callback: (index) => {
            this.createEvent(index);
          }
        },
        {
          name: "SpreadsheetApp",
          description:
            "Get the spreadsheet name from a url with SpreadsheetAPI.",
          url:
            "https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app",
          callback: (index) => {
            this.createSheet(index);
          }
        },
        {
          name: "DriveApp",
          description: "Create a file on your Google Drive",
          url:
            "https://developers.google.com/apps-script/reference/drive/drive-app",
          callback: (index) => {
            this.createFile(index);
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>
