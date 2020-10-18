<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>
      <q-item
        v-for="user in users"
        :key="user.id"
        class="q-my-sm"
        to="/chat"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="user.online ? 'light-green-4' : 'grey-4'">
            {{ user.online ? "Online" : "Offline" }}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "PageUsers",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ruddy Jedrzej",
          letter: "R",
          online: true
        },
        {
          id: 2,
          name: "Mallorie Alessandrini",
          letter: "M",
          online: false
        },
        {
          id: 3,
          name: "Elisabetta Wicklen",
          letter: "E",
          online: true
        }
      ]
    };
  }
};
</script>
