<template>
    <div>
        <v-parallax class="overlayed" src="/assets/images/slide1.jpg" height="250">
            <div class="middle text-xs-center px-3">
                <p class="font-weight-thin display-1">MAKE A RESERVATION</p>
                <p class="font-weight-thin subheading">For media enquiries, please contact: eMail: info@villabukitnaga.com, Tel - Bali // +62 811 388 11 22</p>
            </div>        
        </v-parallax>

        <v-layout row wrap font-weight-thin style="max-width:1200px;margin:auto;">
            <v-flex text-md-right text-xs-center xs12 md5 py-5 px-4 font-weight-thin subheading>
                <p class="font-weight-thin title blue--text mt-5">MAKE A RESERVATION</p>  
                <p>Villa Bukit Naga<br>
                Gianyar, Bali - Indonesia</p>

                <p>Villa Telephone: + 62 361 941118<br>
                Reservation Telephone: +62 811 388 1122<br>
                Email: info@villabukitnaga.com</p>

                <p>Time Zone GMT +8</p>                              
            </v-flex>            
            <v-flex xs12 md7 py-5 px-4>
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
                  <v-layout row wrap>
                      <v-flex xs12><h3>Requirements</h3></v-flex>
                      <v-flex xs12 sm4 my-3>
                        <v-select
                          v-model="data.adults"
                          :items="[1,2,3,4,5]"
                          label="No. Adult"
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 sm4 my-3>
                        <v-select
                          v-model="data.childrens"
                          :items="[1,2,3,4,5]"
                          label="No. Children"
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 sm4 my-3>
                        <v-select
                          v-model="data.infants"
                          :items="[1,2,3,4,5]"
                          label="No. Infants"
                        ></v-select>
                      </v-flex>


                      <v-flex xs12 sm6 my-3>
                            <v-text-field v-model="data.startdate" label="Start date" v-on:click="dialogStartDate=true" />
                            <v-dialog v-model="dialogStartDate" @click="dialogStartDate = false" max-width="290">
                              <v-date-picker v-model="data.startdate"></v-date-picker>
                            </v-dialog>                   
                      </v-flex>   
                      <v-flex xs12 sm6 my-3>
                            <v-text-field v-model="data.enddate" label="End date" v-on:click="dialogEndDate=true" />
                            <v-dialog v-model="dialogEndDate" @click="dialogEndDate = false" max-width="290">
                              <v-date-picker v-model="data.enddate"></v-date-picker>
                            </v-dialog>                   
                      </v-flex>                                    

                      <v-flex xs12 mt-5><h3>Your Details</h3></v-flex> 

                      <v-flex xs12 sm6 mb-2>
                        <v-text-field
                        v-model="data.firstname"
                        :rules="requiredRules"
                        label="First name"
                        required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 mb-2>
                        <v-text-field
                        v-model="data.lastname"
                        :rules="requiredRules"
                        label="Last name"
                        required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 my-3>
                        <v-text-field
                        v-model="data.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 mb-2>
                        <v-text-field
                        v-model="data.company"
                        :rules="requiredRules"
                        label="Company name"
                        required
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12 mb-2>
                        <v-text-field
                        v-model="data.address"
                        :rules="requiredRules"
                        label="Address"
                        required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 mb-2>
                        <v-text-field
                        v-model="data.country"
                        :rules="requiredRules"
                        label="Country"
                        required
                        ></v-text-field>
                      </v-flex>                      

                      <v-flex xs12 sm6 mb-2>
                        <v-text-field
                        v-model="data.telp"
                        :rules="requiredRules"
                        label="Telp"
                        required
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 mb-2>
                        <v-text-field
                        v-model="data.fax"
                        :rules="requiredRules"
                        label="Fax"
                        required
                        ></v-text-field>
                      </v-flex>


                      <v-flex xs12 my-3>
                        <v-textarea
                          v-model="data.enquiry"
                          label="Enquiry"
                        ></v-textarea>
                      </v-flex>

                      <v-flex xs12 my-3>
                        <v-btn
                        :loading="loading"
                        color="blue"
                        dark
                        @click="send" style="min-width:150px;">
                        Send enquiry
                        </v-btn>
                        <v-btn
                        color="warning"
                        @click="reset"
                        >
                        Reset
                        </v-btn>
                      </v-flex>
                  </v-layout>                
                </v-form>
            </v-flex>
        </v-layout>            
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      dialogStartDate: false,
      dialogEndDate: false,
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
            formData.append('adults', this.data.adults)
            formData.append('childrens', this.data.childrens)
            formData.append('infants', this.data.infants)
            
            formData.append('startdate', this.data.startdate)
            formData.append('enddate', this.data.enddate)            

            formData.append('firstname', this.data.firstname)
            formData.append('lastname', this.data.lastname)

            formData.append('email', this.data.email)
            formData.append('company', this.data.company)

            formData.append('telp', this.data.telp)
            formData.append('fax', this.data.fax)

            formData.append('enquiry', this.data.enquiry)

            this.loading = true
            const axithis = this
            axios.post(this.$store.state.apiPath + '/api/reservation',
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