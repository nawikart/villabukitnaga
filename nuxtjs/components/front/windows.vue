<template>
  <div>
    
    <v-layout align-center font-weight-thin subheading>
        <v-item-group
          v-model="window"
          class="shrink mr-4"
          mandatory
          tag="v-flex"
        >
          <v-item
            v-for="n in length"
            :key="n"
          >
            <div slot-scope="{ active, toggle }">
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
              >
                <span class="font-weight-thin">{{n}}</span>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-flex>
          <v-window
            v-model="window"
            class="elevation-1"
            vertical
          >
            <v-window-item
              v-for="n in length"
              :key="n"
            >
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar color="green" class="mr-3"></v-avatar>
                    <strong class="title">Photo Gallery</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </v-layout>

                  <gallery/>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex>
      </v-layout>

  </div>
</template>


<script>
  import gallery from '~/components/front/gallery.vue'
  export default {
    components: {
      gallery
    },    
    data: () => ({
      length: 3,
      window: 0
    })
  }
</script>