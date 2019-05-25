<template>
    <div>
      <v-layout row wrap>
        <v-flex order-xs2 order-md1 xs12 white style="background: url(/assets/images/loading.gif) no-repeat center;">
            <iframe frameborder="0" height="500" src="http://maps.google.com/maps?q=-8.5164534,115.3338111&amp;z=15&amp;output=embed" width="100%"></iframe>
        </v-flex>

        <v-flex order-xs1 order-md2>
          <v-layout row wrap font-weight-thin style="max-width:1200px;margin:auto;">
              <v-flex text-md-right text-xs-center xs12 md5 py-5 px-4 font-weight-thin subheading>
                  <p class="font-weight-thin display-1 mt-5 blue--text">CONTACT US</p>  
                  <p>Villa Bukit Naga<br>
                  Gianyar, Bali - Indonesia</p>

                  <p>Villa Telephone: + 62 361 941118<br>
                  Reservation Telephone: +62 811 388 1122<br>
                  Email: info@villabukitnaga.com</p>

                  <p>Time Zone GMT +8</p>                              
              </v-flex>            
              <v-flex xs12 md7 py-5 px-4>
                  <!-- <p class="font-weight-thin subheading blue--text">please fill form below to send us enquiry.</p>   -->
                      <v-alert
                        color="green" class="mb-5"
                            v-model="successAlert"
                            dismissible
                            type="success">
                            Email sent.
                          </v-alert>
                  <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                    >
                    <v-flex mb-2>
                      <v-text-field
                      v-model="data.name"
                      :rules="requiredRules"
                      label="Name"
                      required
                      ></v-text-field>
                    </v-flex>

                    <v-flex my-3>
                      <v-text-field
                      v-model="data.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                      ></v-text-field>
                    </v-flex>

                    <v-flex mb-2>
                      <v-text-field
                      v-model="data.subject"
                      :rules="requiredRules"
                      label="Subject"
                      required
                      ></v-text-field>
                    </v-flex>

                    <v-flex my-3>
                      <v-textarea
                        v-model="data.message"
                        label="Message"
                      ></v-textarea>
                    </v-flex>

                    <v-flex my-3>
                      <v-btn
                      :loading="loading"
                      color="blue"
                      dark
                      @click="send" style="min-width:150px;">
                      Send message
                      </v-btn>
                      <v-btn
                      color="warning"
                      @click="reset"
                      >
                      Reset
                      </v-btn>
                    </v-flex>                  
                  </v-form>
              </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>            
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      valid: true,
      loading: false,
      successAlert: false,
      data: {},
      requiredRules: [
        v => !!v || 'this item is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
      send () {
        if (this.$refs.form.validate()) {
            console.log(this.data)
            let formData = new FormData()
            formData.append('name', this.data.name)
            formData.append('email', this.data.email)
            formData.append('subject', this.data.subject)
            formData.append('message', this.data.message)

            this.loading = true
            const axithis = this
            axios.post(this.$store.state.apiPath + '/api/contact',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function (response) {
              console.log(response.data)
              axithis.loading = false
              axithis.successAlert = true
              // axithis.$refs.form.reset()
            })
              .catch(function (err) {
                console.log(err)
                axithis.loading = false
              })
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    }
  }
</script>
