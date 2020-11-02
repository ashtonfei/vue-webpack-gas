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
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
            <v-card>
                <v-card-title class="headline">
                Message
                </v-card-title>
                <v-card-text>{{dialogContent}}</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                >
                    OKAY
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogContent: null,
      apis: [
        {
          name: "GmailApp",
          description: "Send an email with GmailApp API.",
          url:
            "https://developers.google.com/apps-script/reference/gmail/gmail-app",
          callback: () => {
            console.log("GmailApp");
            this.dialog = true;
            this.dialogContent = "GmailApp";
          }
        },
        {
          name: "CalendarApp",
          description: "Create a all day event with Calendar API.",
          url:
            "https://developers.google.com/apps-script/reference/calendar/calendar-app",
          callback: () => {
            console.log("CalendarApp");
            this.dialog = true;
            this.dialogContent = "CalendarApp";
          }
        },
        {
          name: "SpreadsheetApp",
          description:
            "Get the spreadsheet name from a url with SpreadsheetAPI.",
          url:
            "https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app",
          callback: () => {
            console.log("SpreadsheetApp");
            this.dialog = true;
            this.dialogContent = "SpreadsheetApp";
          }
        },
        {
          name: "DriveApp",
          description: "Create a file on your Google Drive",
          url:
            "https://developers.google.com/apps-script/reference/drive/drive-app",
          callback: () => {
            console.log("DriveApp");
            this.dialog = true;
            this.dialogContent = "DriveApp";
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>
