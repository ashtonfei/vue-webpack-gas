<template>
    <v-row justify="center">
        <v-col cols="12" sm="12" md="8" lg="6">
            <h1 class="text-center">About Page</h1>
            <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Contact
                </th>
                <th class="text-left">
                    Description
                </th>
                <th class="text-left">
                    Link
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>
                    <v-btn color="primary" target="_blank" :href="item.link" icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-btn>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        </v-col>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "YouTube",
          description:
            "Check my YouTube channel for Google Apps Script projects.",
          link: "https://www.youtube.com/ashtonfei/",
          icon: "slideshow"
        },
        {
          name: "Twitter",
          description: "Ping me on Twitter",
          link: "https://www.twitter.com/ashton_fei/",
          icon: "alternate_email"
        },
        {
          name: "Gmail",
          description:
            "Send me an email anytime when you need support on Google Apps Script",
          link:
            "mailto:yunjia.fei@gmail.com?subject=Google%20Apps%20Script%20Support",
          icon: "mail"
        },
        {
          name: "Code Support Request",
          description:
            "You can also submit a code support request with this Google Form.",
          link: "https://forms.gle/ApjVvQocFFGrCJzdA",
          icon: "support_agent"
        }
      ]
    };
  }
};
</script>

<style>
</style>
