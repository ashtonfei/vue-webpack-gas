<template>
    <div>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="8" lg="6">
            <v-card class="mb-4">
                <v-card-text>
                    <h1 class="text-center primary--text">Google Apps Script APIs Demo</h1> 
                </v-card-text>
            </v-card>
            
            <v-card v-for="api in apis" :key="api.name" class="mb-4">
                <v-card-title primary-title>
                    <v-icon left>code</v-icon>
                    {{api.name}}
                </v-card-title>
                <v-card-text>
                    {{api.description}}
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" text @click="api.callback">Try API</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="secondary" text :href="api.url" target="_blank">Help Doc</v-btn>
                </v-card-actions>
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
    sendEmail() {
      // TODO: use google.script.run api here
      console.log("Send an email with GmailApp");
      this.dialog.open = true;
      this.dialog.title = "Gmail";
      this.dialog.message = "GmailApp API";
    },
    createEvent() {
      // TODO: use google.script.run api here
      console.log("Create a all day event with CalendarApp");
      this.dialog.open = true;
      this.dialog.title = "Google Calendar";
      this.dialog.message = "CalendarApp API";
    },
    createSheet() {
      // TODO: use google.script.run api here
      console.log("Create a spreadsheet on Google Drive with SpreadsheetApp");
      this.dialog.open = true;
      this.dialog.title = "Google Sheet";
      this.dialog.message = "SpreadsheetApp API";
    },
    createFile() {
      // TODO: use google.script.run api here
      console.log("Create a file on Google Drive with DriveApp");
      this.dialog.open = true;
      this.dialog.title = "Google Drive";
      this.dialog.message = "DriveApp API";
    }
  },
  data() {
    return {
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
          callback: () => {
            this.sendEmail();
          }
        },
        {
          name: "CalendarApp",
          description: "Create a all day event with Calendar API.",
          url:
            "https://developers.google.com/apps-script/reference/calendar/calendar-app",
          callback: () => {
            this.createEvent();
          }
        },
        {
          name: "SpreadsheetApp",
          description:
            "Get the spreadsheet name from a url with SpreadsheetAPI.",
          url:
            "https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app",
          callback: () => {
            this.createSheet();
          }
        },
        {
          name: "DriveApp",
          description: "Create a file on your Google Drive",
          url:
            "https://developers.google.com/apps-script/reference/drive/drive-app",
          callback: () => {
            this.createFile();
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>
