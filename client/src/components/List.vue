<template>
  <div class="list">
      <h1 class="title">{{ $route.name }} listing</h1>
      <a-table :columns="columns"
        :rowKey="record => record.uuid"
        :dataSource="data"
        :loading="loading">  
        <template slot="uuid" slot-scope="uuid">
            <a-button type="primary" size="small" ghost v-on:click="gotoDetail(uuid)">
              edit<a-icon type="edit" size="small" />
            </a-button>
        </template>                   
      </a-table>    

  </div>
</template>

<script>
//Access, Status, Time Remaining, Plan, Cancellation Date
import axios from 'axios'
export default {
  data () {
    return {
      columns: [],
      data: [],
      // pagination: {current: 1},
      loading: false,
    }
  },  

  watch: {
    $route: function (val) {
      // const pagination = { ...this.pagination };
      // pagination.current = 1  
      this.loadData()
    }
  },

  methods: {
    gotoDetail(uuid){
      var mod = ''
      switch(this.$route.name) {
        case "features":
          mod = 'feature'
          break
        case "presss":
          mod = 'press'
          break
        default:
          break                                        
      }
      this.$router.push({ path: '/admiin/'+ mod +'?uuid='+ uuid})
    },

    loadData(){
      const axithis = this
      this.loading = true
      var api = ''

      switch(this.$route.name) {
        case "features":
          api = '/features/all'
          this.columns = [{
                            title: 'Title',
                            dataIndex: 'title',
                            sorter: true,
                            width: '85%',
                            scopedSlots: { customRender: 'title' },
                          }, {
                            title: 'Action',
                            dataIndex: 'uuid',
                            key: 'action',
                            scopedSlots: { customRender: 'uuid' },
                          }];
          break;

        case "presss":
          api = '/presss/all'
          this.columns = [{
                            title: 'Title',
                            dataIndex: 'title',
                            sorter: true,
                            width: '85%',
                            scopedSlots: { customRender: 'title' },
                          }, {
                            title: 'Action',
                            dataIndex: 'uuid',
                            key: 'action',
                            scopedSlots: { customRender: 'uuid' },
                          }];
          break;      

        default:
          alert('lol')
      }      

      axios.get(process.env.VUE_APP_API_URL + api,
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('jwtoken')
                }
            })
      .then(function (response) {
          // const pagination = { ...axithis.pagination };

          // pagination.total = parseInt(response.data.count)
          axithis.data = response.data
          if(axithis.$route.name=='bookings'){
            for(let i=0; i<axithis.data.length; i++){
              axithis.data[i].ids = {userId: axithis.data[i].user_id, uuid: axithis.data[i].uuid} 
            }
          }
          if(axithis.$route.name=='bengkels'){
            for(let i=0; i<axithis.data.length; i++){
              axithis.data[i].actionData = {name: axithis.data[i].name, uuid: axithis.data[i].uuid} 
            }
          }          
          // console.log(axithis.data)

          // axithis.pagination = pagination
          // axithis.data = response.data.results
          axithis.loading = false
      })
          .catch(function (err) {
          console.log(err)
          axithis.loading = false
          })       
    },

    // handleTableChange(pagination, filters, sorter){
    //   this.loadData(this.$route.path, pagination)
    // }
  },
  mounted(){
    if(localStorage.getItem('jwtoken') != null){
      this.loadData()
    }else{
      window.location.href = '/'
    }

  }
}
</script>

<style>
.title{
  margin-left: 20px;
}
.fullwidth .ant-form-item-control-wrapper{
  width: 100%;
}
</style>
